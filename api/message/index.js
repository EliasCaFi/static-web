module.exports = async function (context, req) {
    const message = process.env.Message || '';

    context.res.json({
        text: `API\'et siger: ${message}`
    });
}