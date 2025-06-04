import { useEffect, useState } from "react";

const OnlineStatus = () => {

  const [isOnline, setIsOnline] = useState(navigator.onLine) // boolean, παίρνουμε αν είναι online απο τον browser

  useEffect(() => {
    const handler = () => setIsOnline(navigator.onLine)
    const pollingId: number = setInterval(handler, 5000)

    window.addEventListener('online', handler)  // Όταν γίνει online τρέχει τον handler
    window.addEventListener('offline', handler)

      // clean up, θα αφαιρέσουμε τα events (αναιρούμε τη διαδικασία)
    return () => {
      clearInterval(pollingId)
      window.removeEventListener('online', handler)
      window.removeEventListener('offline', handler)
    }


  }, [])

  return(
    <>
      {/*<div className="bg-green-500 text-white text-center mt-6 p-4 rounded mx-4">*/}
      <div className={`text-white text-center mt-6 p-4 rounded mx-4 ${isOnline ? "bg-green-500" : "bg-cf-dark-red"}`}>
        { isOnline ? "You are online" : "You are offline" }
      </div>
    </>
  )
}

export default OnlineStatus;
