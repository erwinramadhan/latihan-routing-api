const express = require('express');
const router = express.Router();
const app = express();

let mahasiswa = [{
    nim:1,
    nama:'erwin',
    jurusan:'TP'
},
{
    nim:2,
    nama:'aa',
    jurusan:'ilkom'
},
{
    nim:3,
    nama:'bb',
    jurusan:'TP'
}]

router.route('/mahasiswa')
    .get((req, res)=>{
    const getMahasiswa = req.params
     res.json(mahasiswa)
 })
    .post((req, res)=>{
    mahasiswa.push(req.body);
    console.log(req.body)
     res.send(req.body);
 })

 router.put('/mahasiswa/:nim', (req, res)=>{
    const nim = req.params.nim;
    const nama = req.body.nama;
    const jurusan = req.body.jurusan;
    mahasiswa.filter(mhs =>{
        if(mhs.nim == nim){
            mhs.nim = nim;
            mhs.nama = nama;
            mhs.jurusan = jurusan;
            return mhs;
        }
    })
    res.send(mahasiswa)
})

router.delete('/mahasiswa/:nim', (req, res)=>{
    const deleteMhs = req.params.nim
    res.send(deleteMhs)
})

module.exports = router