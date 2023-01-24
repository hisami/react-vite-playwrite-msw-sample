import { setupWorker, rest, SetupWorkerApi } from "msw";

export const buildMswWorker = (): SetupWorkerApi => {
  return setupWorker(
    rest.post("http://localhost:8000/api/users", (req, res, ctx) => {
      return res(
        ctx.json({
          message: "Success!",
        })
      );
    })
  );
};
