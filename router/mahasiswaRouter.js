const express = require('express');
const mahasiswaController = require('../controller/mahasiswaController');
const router = express.Router();

router.route('/mahasiswa')
    .get(mahasiswaController.getMahasiswaAll)
    .post(mahasiswaController.postMahasiswa)

router.route('/mahasiswa/:nim')
    .get(mahasiswaController.getMahasiswaByNim)
    .put(mahasiswaController.updateMahasiswa)
    .delete(mahasiswaController.deleteMahasiswa)

module.exports = router