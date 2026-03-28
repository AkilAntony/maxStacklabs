 
interface FallbackUIProps{
    message : string
    
}

const FallbackUI = ({}: FallbackUIProps) => {
  return (
    <div className=" ">
      <h3>Something went wrong</h3>
    </div>
  );
};

export default FallbackUI;
