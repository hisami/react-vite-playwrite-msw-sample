import { setupWorker, rest, SetupWorkerApi } from 'msw'

export const worker = (): SetupWorkerApi => {
  return setupWorker(
    rest.post('http://localhost:8000/api/users', (req, res, ctx) => {
      return res(
        ctx.json({
          message: 'Success!'
        })
      )
    })
  )
}