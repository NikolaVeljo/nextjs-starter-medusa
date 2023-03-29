import Addresses from "@modules/checkout/components/addresses"
import BeachLocationAddress from "@modules/checkout/components/beach-location-address"
import Payment from "@modules/checkout/components/payment"

const CheckoutForm = () => {
  return (
    <div>
      <div className="w-full grid grid-cols-1 gap-y-8">
        <div>
          <Addresses />
        </div>

        <div>
          <BeachLocationAddress />
        </div>

        <div>
          <Payment />
        </div>
      </div>
    </div>
  )
}

export default CheckoutForm
