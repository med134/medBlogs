import React from "react";

const ChartPage = () => {
  return (
    <div className="px-3 mt-0 mb-6 lg:flex-none w-min">
      <div className="relative flex flex-col">
        <div className="flex-auto p-4">
          <iframe
            className="flex justify-between items-start mt-6"
            style={{
              background: "transparent",
              border: "none",
              borderRadius: 2,
              overflowY: "hidden",
              overflow: "hidden",
              width: "60vw",
              height: "90vh",
              scrollBehavior: "none",
            }}
            src="https://charts.mongodb.com/charts-medcodeblogs-nxmomns/embed/dashboards?id=77ed452f-9496-483d-8548-eee465e63d4f&theme=light&autoRefresh=true&maxDataAge=3600&showTitleAndDesc=false&scalingWidth=fixed&scalingHeight=fixed"
          />
        </div>
      </div>
    </div>
  );
};

export default ChartPage;
