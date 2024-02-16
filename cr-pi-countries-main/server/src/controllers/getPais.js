const { Country, Activity } = require('../db');

module.exports = async function getPais(req, res) {
    try {
        const { idPais } = req.params;

        const pais = await Country.findByPk(idPais, {
            include: [
                {
                    model: Activity,
                    required: true
                }
            ]
        });

        if (!pais) {
            res.status(404).json({ error: 'País no existe' });
            return;
        }

        res.status(200).json(pais);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
