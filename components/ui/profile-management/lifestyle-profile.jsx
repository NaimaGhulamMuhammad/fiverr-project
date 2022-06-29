import ViewInformationField from "./view-information-field";

const LifestyleProfile = () => {
  return (
    <div className="flex flex-col mt-6 mb-12">
      <ViewInformationField label="Smoking Habits" value="I don't smoke" />
      <ViewInformationField label="Drinking Habits" value="Rare" />
      <ViewInformationField label="Activity Level" value="Moderately active" />
      <ViewInformationField label="Food Preference" value="Non-Vegetarian" />
      <ViewInformationField label="Occupation" value="IT Professional" />
    </div>
  );
};

export default LifestyleProfile;
