let mahasiswa = [
    {
        nim: 1,
        nama: 'erwin',
        jurusan: 'TP'
    },
    {
        nim: 2,
        nama: 'aa',
        jurusan: 'ilkom'
    },
    {
        nim: 3,
        nama: 'bb',
        jurusan: 'TP'
    }
];

module.exports = {
    getMahasiswaAll: (req, res)=>{
        const getMahasiswa = req.params
        if (mahasiswa.length > 0) {
            res.json({
                status: true,
                method: req.method,
                url: req.url,
                mahasiswa,
                date: req.time.toString()
            })
        } else {
            res.json({
                status: false,
                message: 'data mahasiswa masih kosong'
            })
        }
    },
    getMahasiswaByNim: (req,res)=>{
        const nim = +req.params.nim; //bikin variabel untuk menyimpan +parameter nim
        const dataMhs = mahasiswa.find(mhs => mhs.nim === nim); //bikin variable yang menyimpan fungsi mencari data melalui nim yang telah diinputkan di route

        if (dataMhs != null){
            return res.status(200).json({
                success: true,
                method: req.method,
                url: req.url,
                message: `data mahasiswa dengan nim:${nim}`,
                dataMhs,
                date: req.time.toString()
            })
        } else{
            res.json({
                status: false,
                message: `mahasiswa dengan nim ${nim} belum ada data`,
                date: req.time.toString()
            })
        }       
    },
    postMahasiswa:(req, res) => {
        mahasiswa.push(req.body);
        res.send({
            status: true,
            data: mahasiswa,
            method: req.method,
            url: req.url,
            message: 'Data mahasiswa berhasil disimpan',
            date: req.time.toString()
        })
    },
    updateMahasiswa: (req, res)=>{
        const nim = req.params.nim;
        const nama = req.body.nama;
        const jurusan = req.body.jurusan;
        mahasiswa.filter(mhs => {
            if (mhs.nim == nim) {
                mhs.nim = nim;
                mhs.nama = nama;
                mhs.jurusan = jurusan;
                return mhs;
            }
        })
        res.json({
            status: true,
            method: req.method,
            mahasiswa,
            message: `Mahasiswa dengan NIM: ${nim} berhasil di update`,
            url: req.url,
            date: req.time.toString()
        })
    },
    deleteMahasiswa: (req,res)=>{
        let nim = req.params.nim;
        mahasiswa = mahasiswa.filter(mhs => mhs.nim != nim)
        res.send({
            status: true,
            method: req.method,
            url: req.url,
            message: `Mahasiswa dengan nim ${nim} berhasil dihapus`,
            mahasiswa,
            date: req.time.toString()
        })
    }
};