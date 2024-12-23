

const ProgressDisplay = ({progress}) => {
  return (
      <div className="w-full bg-gray-200 h-2.5 rounded-full">
          <div style={{width: `${progress}%` }} className="bg-blue-600 h-2.5 rounded-full">
              
          </div>
    </div>
  )
}

export default ProgressDisplay