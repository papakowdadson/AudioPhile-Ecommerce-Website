import ScreenCap from '../../layout/ScreenCap'
import ProductsSection from '../../features/home/ProductsSection'


const MenuModal = ({handleCloseModal}) => {

    return (
    <div className={`fixed top-[73px] w-full h-full  bg-black bg-opacity-50 flex items-start justify-center z-50 md:hidden`} onClick={handleCloseModal} >
        <ScreenCap> 
            <div className='bg-tertiary_white max-lg:px-4 max-sm:overflow-auto max-sm:h-[calc(100svh-200px)] py-8 rounded-b-lg'
            onClick={(e)=>e.stopPropagation()}>
                <ProductsSection handleCloseModal={handleCloseModal}/>
            </div>                   
        </ScreenCap>
    </div>
  )
}

export default MenuModal
