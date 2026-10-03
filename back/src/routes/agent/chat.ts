import { Router } from "express"
import multer from "multer"

const router = Router()
const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 10 * 1024 * 1024 }
})

async function transcreverAudio(audio: Express.Multer.File): Promise<string> {
    const form = new FormData()
    const audioBuffer = new ArrayBuffer(audio.buffer.byteLength)
    new Uint8Array(audioBuffer).set(audio.buffer)
    form.append("arquivo", new Blob([audioBuffer], { type: audio.mimetype }), audio.originalname)

    const resposta = await fetch(`${process.env.TRANSCRITOR_URL}/transcrever`, {
        method: "POST",
        body: form
    })
    if (!resposta.ok) throw new Error("Falha na transcrição")

    const { texto } = await resposta.json()
    return texto
}

router.post("/audio", upload.single("audio"), async (req, res) => {
    if (!req.file) {
        res.status(400).json({ erro: "Áudio não enviado." })
        return
    }
    try {
        const texto = await transcreverAudio(req.file)
        res.status(200).json({ texto })
    } catch {
        res.status(500).json({ erro: "Erro ao transcrever o áudio." })
    }
})

export default router