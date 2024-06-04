// src/components/PickaxeForm.js
import React, { useEffect } from "react";

const PickaxeForm = () => {
  useEffect(() => {
    // Ensure the script has run to render the form
    if (typeof window !== "undefined" && window.Pickaxe) {
      window.Pickaxe.init();
    }
  }, []);

  return (
    <div
      id="rendering-informati"
      data-height="500px"
      data-width="100%"
      data-formid="Raja_Rathanam_A1A7Z"
      data-frame-source="https://embed.pickaxeproject.com/axe?id=Raja_Rathanam_A1A7Z&mode=embed_gold&host=beta&theme=light&opacity=100&font_header=Real+Head+Pro&size_header=30&font_body=Real+Head+Pro&size_body=16&font_labels=Real+Head+Pro&size_labels=14&font_button=Real+Head+Pro&size_button=16&c_fb=FFFFFF&c_ff=FFFFFF&c_fbd=888888&c_rb=FFFFFF&c_bb=228DD7&c_bt=000000&c_t=000000&s_ffo=100&s_rbo=100&s_bbo=100&s_f=minimalist&s_b=outline&s_t=2&s_to=1&s_r=2"
      data-title="Raja Rathanam"
    ></div>
  );
};

export default PickaxeForm;
