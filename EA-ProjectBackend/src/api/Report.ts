import reportController from '../controller/reportController';
import { Router } from 'express';

//MÍNIM 1 IRENE GORDUN --> gestor de denuncies
// 4 LLAMADAS DEL CRUD (create, getOne, canvel, update) I LISTADO (getall)

const router = Router();

// create nova denuncia --> FUNCIONA
router.post('/', reportController.create);

// get all denuncies --> FUNCIONA
router.get('/', reportController.getall);

// get one per id --> FUNCIONA
router.get('/:id', reportController.getOne);

// delete report per id --> FUNCIONA
router.delete('/:id', reportController.cancel);

// update report per  --> FUNCIONA
router.put('/:id', reportController.update);

export default router;