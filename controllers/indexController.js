
const indexController = {
    index: async (req, res) => {

        // res.render('index', {
        //     title: 'API de Pokémons | Trigg - Test',
        //     description: 'Teste aplicado pela empresa Trigg - API de Pokémons',
        //     canonical: req.protocol + "://" + req.get('host'),  
        //     url: req.protocol + "://" + req.get('host')          
        // })

        res.status(200).send({
            title: 'API de Pokémons | Trigg - Test',
            description: 'Teste aplicado pela empresa Trigg - API de Pokémons',
            canonical: req.protocol + "://" + req.get('host'),  
            url: req.protocol + "://" + req.get('host')      
        })
    }
}

module.exports = indexController