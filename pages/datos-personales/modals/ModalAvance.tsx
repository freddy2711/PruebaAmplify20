import Modals from './../../../components/UI/atoms/modal/Modal'

const ModalAvance = ({modalShowAvance, setModalShowAvance, avance}: any) => {
	return (
		<Modals
        size="lg"
        show={modalShowAvance}
        onHide={() => setModalShowAvance(false)}
        titulo={'Avance'}
    >
			<p>
			Usted tiene {avance}% de avance en el registro de sus datos. Es necesario completar el 100% de su información.
			</p>
		</Modals>
	)
}

export default ModalAvance