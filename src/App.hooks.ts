import { wrap, releaseProxy } from "comlink";
import { useEffect, useState, useMemo } from "react";

export function useTakeALongTimeToAddTwoNumbers(
  number1: number,
  number2: number
) {
  const [data, setData] = useState({
    isCalculating: false,
    total: undefined as number | undefined,
  });

  const { workerApi } = useWorker();

  useEffect(() => {
    setData({ isCalculating: true, total: undefined });

    workerApi
      .takeALongTimeToAddTwoNumbers(number1, number2)
      .then((total: number) => setData({ isCalculating: false, total }));
  }, [workerApi, setData, number1, number2]);

  return data;
}

function useWorker() {
  const workerApiAndCleanup = useMemo(() => makeWorkerApiAndCleanup(), []);

  useEffect(() => {
    const { cleanup } = workerApiAndCleanup;

    return () => {
      cleanup();
    };
  }, [workerApiAndCleanup]);

  return workerApiAndCleanup;
}

function makeWorkerApiAndCleanup() {
  const worker = new Worker("./my-first-worker", {
    name: "my-first-worker",
    type: "module",
  });

  const workerApi = wrap<import("./my-first-worker").MyFirstWorker>(worker);

  const cleanup = () => {
    workerApi[releaseProxy]();
    worker.terminate();
  };

  const workerApiAndCleanup = { workerApi, cleanup };

  return workerApiAndCleanup;
}
