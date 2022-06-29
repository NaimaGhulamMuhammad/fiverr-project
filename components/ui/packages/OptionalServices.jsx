import { BENEFITS, SERVICES } from "../../../lib/data";
import { currencyFormatter } from "../../../lib/helper/currency";
import { RegularText, FadedSmallText, MediumText } from "../core/Text";
import Selector from "../core/Selector";
const OptionalServices = ({
  handleOptionalClick,
  healthPackage,
  optionals,
}) => {
  return (
    <div>
      {healthPackage?.optionalServiceIds?.length > 0 ? (
        <div className="flex flex-col pb-2">
          <RegularText classes="font-medium">Optional Services</RegularText>
        </div>
      ) : (
        ""
      )}
      {SERVICES.filter((service) =>
        healthPackage?.optionalServiceIds?.includes(service.id)
      ).map((service) => (
        <div key={service.id}>
          <div className="pb-2">
            <div className="text-primary-100 mt-2">
              <RegularText classes="font-medium">{service.name}</RegularText>
            </div>
            <FadedSmallText>{service.description}</FadedSmallText>
            {BENEFITS.filter(
              (benefit) =>
                service.benefitIds.includes(benefit.id) &&
                healthPackage?.optionalBenefitIds.includes(benefit.id)
            ).map((benefit) => {
              const handleSelection = () => {
                handleOptionalClick(benefit);
              };
              return (
                <Selector
                  key={benefit.id}
                  selected={optionals?.includes(benefit)}
                  handleSelection={handleSelection}
                  selectable={healthPackage.type !== "special"}
                >
                  <div>
                    <MediumText classes="text-sm">- {benefit.name}</MediumText>
                    <FadedSmallText classes="ml-3 pr-2 mb-1">
                      {benefit.description}
                    </FadedSmallText>
                    {healthPackage?.type === "special" ? (
                      <></>
                    ) : (
                      <MediumText classes="text-sm font-medium ml-3">
                        {benefit.price.ccyCode}
                        {currencyFormatter(benefit.price.amount)}
                      </MediumText>
                    )}
                  </div>
                </Selector>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};
export default OptionalServices;
