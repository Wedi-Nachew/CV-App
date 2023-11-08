import {
    EditorProvider,
    BubbleMenu,
    FloatingMenu,
    useCurrentEditor,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import "../style/tiptap.css";

const extensions = [StarterKit];
const content = "<p>Enter your description here</p>";
function MenuBar() {
    const { editor } = useCurrentEditor();
    const data = editor.getJSON();
    if (!editor) {
        return null;
    }
    return (
        <div className="menu-bar">
            <button
                onClick={() => editor.chain().focus().undo().run()}
                disabled={!editor.can().chain().focus().undo().run()}
            >
                <img src="/undo.svg" />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={editor.isActive("bulletList") ? "is-active" : ""}
            >
                <img src="/bullet-list.svg" />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                disabled={!editor.can().chain().focus().toggleBold().run()}
                className={editor.isActive("bold") ? "is-active" : ""}
            >
                <img src="/bold.svg" />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                disabled={!editor.can().chain().focus().toggleItalic().run()}
                className={editor.isActive("italic") ? "is-active" : ""}
            >
                <img src="/italic.svg" />
            </button>
            <button
                onClick={() => editor.chain().focus().redo().run()}
                disabled={!editor.can().chain().focus().redo().run()}
            >
                <img src="/redo.svg" />
            </button>
        </div>
    );
}
export default function TipTap() {
    return (
        <>
            <h3>Description</h3>
            <div className="description">
                <EditorProvider
                    slotBefore={<MenuBar />}
                    extensions={extensions}
                    content={content}
                ></EditorProvider>
            </div>
        </>
    );
}
