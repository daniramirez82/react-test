const delay = async (ms: number) => await new Promise(resolve => setTimeout(resolve, ms))

export const getUsers = async ({ pageParam = 1 }: { pageParam?: number }) => {
  await delay(500)

  return await fetch(`https://randomuser.me/api?results=10&seed=federicaRamirez&page=${pageParam}`)
    .then(async res => {
      if (!res.ok) throw new Error('Error en la petición')
      return await res.json()
    })

    .then(res => {
      const currentPage = Number(res.info.page)
      const nextCursor = currentPage > 3 ? undefined : currentPage + 1

      return {
        users: res.results,
        nextCursor
      }
    })
}
