import StepContainer from "../step-container"
import Input from "@modules/common/components/input"
import { CheckoutFormValues } from "@lib/context/checkout-context"
import ConnectForm from "@modules/common/components/connect-form"
import { useMeCustomer } from "medusa-react"
import AddressSelect from "../address-select"

const BeachLocation = () => {
  const { customer } = useMeCustomer()

  return (
    <StepContainer
      title="Beach Location"
      index={3}
      shouldShowError={true}
      closedState={
        <div className="px-8 pb-8 text-small-regular">
          <p>Fill all fields to see available payment options.</p>
        </div>
      }
    >
      <div>
      {customer && (customer.shipping_addresses?.length || 0) > 0 && (
        <div className="mb-6 flex flex-col gap-y-4 bg-amber-100 p-4">
          <p className="text-small-regular">
            {`Hi ${customer.first_name}, do you want to use one of your saved addresses?`}
          </p>
          <AddressSelect addresses={customer.shipping_addresses} />
        </div>
      )}
      <ConnectForm<CheckoutFormValues>>
        {({ register, formState: { errors, touchedFields } }) => (
          <div className="grid grid-cols-1 gap-y-2 pl-8 pr-8 pb-8">
            <Input
              label="Beach Name"
              {...register("shipping_address.address_1", {
                required: "Beach Name is required",
              })}
              autoComplete="address-line1"
              errors={errors}
              touched={touchedFields}
              />

            <Input
              label="Umbrella number"
              {...register("shipping_address.postal_code", {
                required: "Umbrella number is required",
              })}
              autoComplete="postal-code"
              errors={errors}
              touched={touchedFields}
              />
          </div>
        )}
        </ConnectForm>
      </div>
    </StepContainer>
  )
}

export default BeachLocation
