import React, { useEffect, useRef } from "react";

const DescriptionEditor = () => {
  const editorRef = useRef(null);

  useEffect(() => {
    // Ensure jQuery is globally available
    window.$(editorRef.current).trumbowyg({
      svgPath:
        "https://cdnjs.cloudflare.com/ajax/libs/Trumbowyg/2.27.3/ui/icons.svg",
      btns: [
        ["viewHTML"],
        ["undo", "redo"],
        ["formatting"],
        ["strong", "em", "del"],
        ["superscript", "subscript"],
        ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull"],
        ["unorderedList", "orderedList"],
        ["horizontalRule"],
        ["removeformat"],
        ["fullscreen"],
      ],
    });

    // Cleanup
    return () => {
      window.$(editorRef.current).trumbowyg("destroy");
    };
  }, []);

  return <textarea id="description-editor" ref={editorRef}></textarea>;
};

export default DescriptionEditor;
