
const useDatosAsis = (datos: any, valor: string, idAlum: string) => {

  const newDatosMod = datos.map((item: any) => {

    if(item.AluCodigo === idAlum){
        item.Asistencia = valor
    }

    return item
  })


  return (
    newDatosMod
  )
}

export default useDatosAsis