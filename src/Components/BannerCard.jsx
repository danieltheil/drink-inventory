function BannerCard(props){
    
    return (
        <button
        onClick={() => props.setViewState(props.viewState)}
        className={`
            cardContainer 
            ${props.gradient} 
            col-span-${props.cols} 
            row-span-${props.rows} 
            text-gray-50
            content-center
            m-6 mt-10 ml-12
            p-2 rounded-lg 
            grid grid-rows-8`}
        style={{ border: "none", backgroundColor: props.color }}
        >

        <div className={`
            content-center
            ${props.isMobile ? "text-lg" : "text-5xl"}
            font-semibold `}>
            {props.bannerContent}
        </div>

    </button>)
}

export default BannerCard;