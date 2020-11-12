const express = require('express');
const router = express.Router();
const CakesService = require('../../services/cakes');

const cake_service = new CakesService();

router.get('/', async (req, res) => {
    try{
        const cakes = await cake_service.getCakes();
        res.status(200).json({
            data: cakes,
            message: 'cakes listed'
        });
    }catch(error){
        console.log('[ERROR]', error);
        res.status(500).json({
            error: error.name,
            message: error.message
        });
    }
});


router.get('/:cakeId', async (req, res) => {
        
    const { cakeId } = req.params;
    
    try{
        const cakeById = await cake_service.getCake({ cakeId });
        res.status(200).json({
            data: cakeById,
            message: 'cake by id'
        });   
    }catch(error){
        console.log('[ERROR]', error);
        res.status(500).json({
            error: error.name,
            message: error.message
        });
    }
    
});

router.post('/', async(req, res) => {
    const { body : cake } = req;
    try{
        const newCake = await cake_service.createCake({ cake });
        res.status(201).json({
            data: newCake,
            message: 'cake created'
        });
    }catch(error){
        console.log('[ERROR]', error);
        res.status(500).json({
            error: error.name,
            message: error.message
        });
    }
});

router.put('/:cakeId', async (req, res) => {
        
    const { cakeId } = req.params;
    const { body: cake } = req;
    console.log({cake});
    
    try{
        const cakeUpdated = await cake_service.updateCake({ cakeId, cake });
        res.status(200).json({
            data: cakeUpdated,
            message: 'cake updated'
        });   
    }catch(error){
        console.log('[ERROR]', error);
        res.status(500).json({
            error: error.name,
            message: error.message
        });
    }
    
});

router.delete('/:cakeId', async(req, res) => {
    const { cakeId } = req.params;
    try{
        const deleteCake = await cake_service.deleteCake({ cakeId });
        res.status(200).json({
            data: deleteCake,
            message: 'cake deleted'
        });
    }catch(error){
        console.log('[ERROR]', error);
        res.status(500).json({
            error: error.name,
            message: error.message
        });
    }
});

module.exports = router;
