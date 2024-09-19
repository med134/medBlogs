"use client";
import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const MyEditor = () => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState(initialValue);

  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        data="<p>Hello from CKEditor 5!</p>"
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
        }}
      />
    </div>
  );
};

export default MyEditor;
