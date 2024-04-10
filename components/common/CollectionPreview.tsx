import cx from "classnames";

interface Props {
  className?: string;
}

const CollectionPreview: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cx(
        "bg-[#FFFFFF01] shadow-[0px_4px_60px_#00000014]",
        className
      )}
    >
      <div className="bg-primary" style={{ aspectRatio: 0.8 }}></div>
      <div className="space-y-3 px-8 py-6 md:px-4">
        <div className="space-y-1">
          <p className={"text-base font-light text-primary"}>Text</p>
          <p className="text-xl font-semibold leading-[1.6] text-[#111827]">
            Name
          </p>
          <p className={"text-base font-light text-[#111827]"}>
            128.3 x 102.3 cm (50.51 x 40.28 in)
          </p>
          <p className={"text-base font-light text-[#111827]"}>Photographs</p>
        </div>
        <div>
          <p className={"text-sm font-light text-[#111827]"}>
            Last sale at Christies
          </p>
          <p className={"text-xl font-semibold leading-[1.6] text-primary"}>
            $234,139
          </p>
        </div>
      </div>
    </div>
  );
};

export default CollectionPreview;
