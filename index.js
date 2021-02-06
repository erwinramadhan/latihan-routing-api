const express = require('express');
const app = express();
const router = require('./router/mahasiswaRouter')



app.use(express.json());
app.use(express.urlencoded({extended: true}))

// app.post('/mahasiswa', (req, res, next)=>{
//     console.log(req.body)
//     res.json(req.body)
// })

// app.get('/mahasiswa', (req, res)=>{
//     const mahasiswa ={
//         nim: 1,
//         nama: 'erwin',
//         alamat: 'indonesia'
//     }
//     res.json(mahasiswa)
// });

// app.get('/redirect', (req, res)=>{
//     res.redirect('https://google.com')
// })

// app.route('/mahasiswatest')
// .get(function(req, res){
//     res.send('berhasil route groupnya')
// })
// .post(function(req, res){
//     res.send('berhasil route group menggunakan postnya')
// })
// .put(function(req, res){
//     res.send('berhasil route group menggunakan put')
// })

// // app.get('/mahasiswa/:nim', (req, res)=>{
// //     // const mahasiswa={
// //     // //     nim: 1,
// //     // //     nama:'ada',
// //     // //     alamat:'cuman test doang'
// //     // // }
// //     const nim = +req.params.nim;
// //     const fetchedMhs = mahasiswa.find((mhs) => mhs.nim === nim);
// //     return res.status(200).json({
// //         succes: true,
// //         fetchedMhs,
// //     });
// // });

// app.post('/users', (req, res)=>{
//     res.send('Post User')
// })

// app.put('/users/:id', (req,res)=>{
//     // res.send(req.params)
//     // or
//     const id = req.params
//     res.send(id)
// })

// app.delete('/users/:userId', (req, res)=>{
//     const userId = req.params.userId;
//     res.send(userId);
// })
app.use(router)

app.listen(3000, () =>{
    console.log('server berjalan bro')
});