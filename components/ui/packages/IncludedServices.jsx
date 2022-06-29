import { VscInfo } from "react-icons/vsc";
import { BENEFITS, SERVICES } from "../../../lib/data";
import ReactTooltip from "react-tooltip";
import { RegularText, FadedSmallText, MediumText } from "../core/Text";
const IncludedServices = (props) => {
  return (
    <div className="bg-white rounded-lg pb-6 mb-6 overflow-hidden shadow-xl">
      <ReactTooltip effect="solid" multiline />
      <div className="bg-secondary-100 py-4 px-4">
        <RegularText classes="text-white">Included Services</RegularText>
      </div>
      <div className="text-primary-100 px-4 mt-4">
        <RegularText classes="font-medium">Blood Investigations</RegularText>
      </div>
      {SERVICES.filter(
        (service) =>
          props.healthPackage?.serviceIds?.includes(service.id) &&
          service.profile
      ).map((service) => (
        <div className="mx-4 border-b-2 border-gray-300" key={service.id}>
          <div className="py-2">
            <div className="text-secondary-100 font-medium text-sectionHead">
              {service.name}
            </div>
            <FadedSmallText>{service.description}</FadedSmallText>
            {BENEFITS.filter(
              (benefit) =>
                service.benefitIds.includes(benefit.id) &&
                props.healthPackage.benefitIds.includes(benefit.id)
            ).map((benefit) => {
              return benefit.description !== "" ? (
                <div
                  key={benefit.id}
                  className="flex justify-between tooltip items-center"
                  data-tip={benefit.tooltip}
                >
                  <div className="grow lg:flex-none cursor-pointer text-left my-1">
                    <MediumText classes="text-sm">{benefit.name}</MediumText>
                  </div>
                  <p className="lg:hidden">
                    <VscInfo size={16} />
                  </p>
                </div>
              ) : (
                <div className="my-1" key={benefit.id}>
                  <MediumText classes="text-sm">{benefit.name}</MediumText>
                </div>
              );
            })}
          </div>
        </div>
      ))}
      {SERVICES.filter(
        (service) =>
          props.healthPackage?.serviceIds?.includes(service.id) &&
          !service.profile
      ).map((service) => (
        <div
          className="mx-4 border-b-2 border-gray-300 last:border-b-0"
          key={service.id}
        >
          <div className="py-2">
            <div className="text-primary-100 mt-2">
              <RegularText classes="font-medium">{service.name}</RegularText>
            </div>
            <FadedSmallText>{service.description}</FadedSmallText>
            {BENEFITS.filter(
              (benefit) =>
                props.healthPackage.benefitIds.includes(benefit.id) &&
                service.benefitIds.includes(benefit.id)
            ).map((benefit) => {
              return benefit.description !== "" ? (
                <div
                  key={benefit.id}
                  className="flex justify-between tooltip items-center"
                  data-tip={benefit.tooltip}
                >
                  <div className="grow lg:flex-none cursor-pointer text-left my-1">
                    <MediumText classes="text-sm">{benefit.name}</MediumText>
                  </div>
                  <p className="lg:hidden">
                    <VscInfo size={20} />
                  </p>
                </div>
              ) : (
                <div className="my-1" key={benefit.id}>
                  <MediumText classes="text-sm">{benefit.name}</MediumText>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default IncludedServices;
