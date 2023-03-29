import { useCheckout } from "@lib/context/checkout-context"
import Shipping from "@modules/checkout/components/shipping"
import BeachLocation from "../beach-location"
import Button from "@modules/common/components/button"
const BeachLocationAddress = () => {
  const {
    editAddresses: { state: isEdit, toggle: setEdit },
    cart,
    handleSubmit,
    setAddresses
  } = useCheckout()

  if (!cart?.id) {
    return null
  }

  let shouldShowBeachLocationContent = cart?.shipping_methods[0]?.shipping_option?.name === "Beach Delivery"

  return (
    <div className="bg-white pb-8">
        <div>
          <Shipping cart={cart} />
            { shouldShowBeachLocationContent &&
              <div className="pt-3">
                <BeachLocation/>
              </div>
            }
        </div>

          { shouldShowBeachLocationContent &&
            <Button
              className="max-w-[200px] ml-8"
              onClick={handleSubmit(setAddresses)}
            >
              Continue to payment
            </Button>
          }
      </div>
  )
}

export default BeachLocationAddress
