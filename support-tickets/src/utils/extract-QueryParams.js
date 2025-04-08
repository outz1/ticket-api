export function extractQueryParams(query) {
  return query
    .slice(1) // Retira o ? do inicio
    .split("&") // Separa cada parametro
    .reduce((queryParams, param) => {
      // Separa cada chave e valor do parametro
      const [key, value] = param.split("=");

      queryParams[key] = value;

      return queryParams;
    }, {});
}
