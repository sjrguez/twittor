class Camara {

    constructor(videoNode) {
        this.videoNode = videoNode
        console.log("camara init");

    }


    encender() {
        let data = {
            audio: false,
            video: { width: 300, height: 300 }
        }
        navigator.mediaDevices.getUserMedia(data).then(stream => {
            this.videoNode.srcObject = stream
            this.stream = stream
        })
    }

    apagar() {
        this.videoNode.pause()

        if (this.stream) {
            this.stream.getTracks()[0].stop()
        }
    }

    tomarFoto() {
        // Crear elemento canvas para renderizar el stream
        let canvas = document.createElement('canvas')

        // Colocar las dimensiones igual al elemnto del video
        canvas.setAttribute('width', 300)
        canvas.setAttribute('height', 300)

        // Colocar contexto
        let context = canvas.getContext('2d')

        //  dibujar la imagen

        context.drawImage(this.videoNode, 0, 0, canvas.width, canvas.height)


        this.foto = context.canvas.toDataURL()


        canvas = null
        context = null

        return this.foto



    }

}