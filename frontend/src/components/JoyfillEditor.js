import React, { useState, useEffect } from 'react';
import { retrieveTemplate } from './Joyfill_API.js';
import { JoyDoc } from '@joyfill/components';
import Header from './Header';

function Joyfill() {

  const [ template, setTemplate ] = useState(null);

  /**
   * Add your template identifier
   */
  const identifier = 'template_670c76350ecdc19ec7fb81ef';

  /**
   * Retrieve template via the Joyfill API 
   */
  useEffect(() => {

    const handleRetrieveTemplate = async () => {
      const response = await retrieveTemplate(identifier);
      setTemplate(response);
    };

    handleRetrieveTemplate();

  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#ff5002] to-[#150824]">
      <Header />
      <div className="joyfill-container bg-[#150824] bg-opacity-40 p-10 rounded-lg flex flex-col items-center mt-10">
        <h2 className="text-white font-montserrat text-2xl text-center mb-6">Joyfill Document Editor</h2>
        <div className="joydoc-wrapper w-full h-full flex items-center justify-center">
          <div className="joydoc-editor">
            <JoyDoc
              className="joydoc-editor w-full h-full"
              mode="edit"
              doc={template}
              onChange={(changelogs, data) => {
                /**
                 * Changelogs represent the individual change that was made
                 * Data represents the entire data structure with all new changes applied.
                 */
                console.log('>>>>>>>: ', changelogs, data);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Joyfill;