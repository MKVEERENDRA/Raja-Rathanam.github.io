// src/components/ExternalButton.js
import React from 'react';
import useExternalResource from './UseExternal';

const ExternalButton = () => {
  useExternalResource(
    'https://embed.pickaxeproject.com/axe/scripts/inline-button/styles.css',
    'https://embed.pickaxeproject.com/axe/scripts/inline-button/bundle.js'
  );

  return (
    <div
      id="pickaxe-inline-action-btn"
      data-formid="Raja_Rathanam_A1A7Z"
      data-frame-source="https://embed.pickaxeproject.com/axe?id=Raja_Rathanam_A1A7Z&mode=embed_gold&host=beta&theme=light&opacity=100&font_header=Real+Head+Pro&size_header=30&font_body=Real+Head+Pro&size_body=16&font_labels=Real+Head+Pro&size_labels=14&font_button=Real+Head+Pro&size_button=16&c_fb=FFFFFF&c_ff=FFFFFF&c_fbd=888888&c_rb=FFFFFF&c_bb=228DD7&c_bt=FFFFFF&c_t=000000&s_ffo=100&s_rbo=100&s_bbo=100&s_f=box&s_b=filled&s_t=1&s_to=1&s_r=2&sb_t=Chat With AI"
      data-title="Raja Rathanam"
      data-btn-color="228DD7"
      data-btn-style="filled"
      data-border-radius="2"
      data-border-width="1"
      data-font-color="FFFFFF"
    />
  );
};

export default ExternalButton;
