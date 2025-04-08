export function index({ request, response, database }) {
  const { status } = request.query; // retorna o valor do parametro
  
  const filters = status ? { status } : null; // se o status for diferente de null, retorna o valor do parametro
  const tickets = database.select("tickets", filters);
  
  return response.end(JSON.stringify(tickets));
}
