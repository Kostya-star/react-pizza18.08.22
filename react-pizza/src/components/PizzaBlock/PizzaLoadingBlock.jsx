import ContentLoader from "react-content-loader"


const PizzaLoadingBlock = () => {
   return (
      <ContentLoader 
      className='pizza-block'
      speed={2}
      width={260}
      height={460}
      viewBox="0 0 260 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ebebea"
    >
      <circle cx="120" cy="126" r="120" /> 
      <rect x="0" y="300" rx="0" ry="0" width="280" height="36" /> 
      <rect x="0" y="356" rx="4" ry="4" width="280" height="67" /> 
      <rect x="3" y="431" rx="0" ry="0" width="50" height="25" /> 
      <rect x="159" y="432" rx="10" ry="10" width="91" height="24" />
    </ContentLoader>
  )
}

export default PizzaLoadingBlock;