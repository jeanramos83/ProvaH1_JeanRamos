app.post('/', (request, response) => {
    const { name, nameinstituicao, valorDoacao, cpf } = request.body;
    return response.json({ name, nameinstituicao, valorDoacao, cpf });

});

app.listen(3333, () => {
    console.log("Server running");
});