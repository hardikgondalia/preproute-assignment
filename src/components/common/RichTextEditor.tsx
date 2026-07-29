import React, { useCallback } from "react";
import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import TextAlign from "@tiptap/extension-text-align";
import UnderlineExt from "@tiptap/extension-underline";
import {
  Italic,
  Bold,
  Underline as UnderlineIcon,
  Strikethrough,
  Link as LinkIcon,
  Square,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Code2,
  Minus,
  Image as ImageIcon,
  Sigma,
  Trash2,
} from "lucide-react";

// Note: @tiptap/starter-kit does not include Underline by default.
// Install it separately: npm install @tiptap/extension-underline lucide-react

interface ToolbarButtonProps {
  onClick?: () => void;
  isActive?: boolean;
  children: React.ReactNode;
  title?: string;
}

function ToolbarButton({ onClick, isActive, children, title }: ToolbarButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      className={`p-1.5 rounded-md transition-colors ${
        isActive
          ? "bg-slate-100 text-slate-900"
          : "text-slate-500 hover:bg-slate-50 hover:text-slate-700"
      }`}
    >
      {children}
    </button>
  );
}

function Divider() {
  return <div className="w-px h-5 bg-slate-200 mx-1" />;
}

export interface RichTextEditorProps {
  /** Initial HTML content to load into the editor */
  content?: string;
  /** Fired on every edit with the updated HTML string */
  onChange?: (html: string) => void;
  /** Optional handler for the trash icon; hidden if not provided */
  onDelete?: () => void;
  /** Placeholder text shown when the editor is empty (requires Placeholder extension to render) */
  placeholder?: string;
  /** Optional className to extend/override the outer wrapper styling */
  className?: string;
}

export default function RichTextEditor({
  content = "",
  onChange,
  onDelete,
  placeholder = "Type here",
  className = "",
}: RichTextEditorProps) {
  const editor: Editor | null = useEditor({
    extensions: [
      StarterKit,
      UnderlineExt,
      Link.configure({
        openOnClick: false,
        autolink: true,
      }),
      Image,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange?.(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          "prose prose-sm max-w-none focus:outline-none min-h-[140px] px-4 py-3 text-slate-700",
        "data-placeholder": placeholder,
      },
    },
  });

  const setLink = useCallback(() => {
    if (!editor) return;
    const previousUrl = editor.getAttributes("link").href as string | undefined;
    const url = window.prompt("Enter URL", previousUrl || "https://");
    if (url === null) return;
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }, [editor]);

  const addImage = useCallback(() => {
    if (!editor) return;
    const url = window.prompt("Image URL");
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

  if (!editor) return null;

  return (
    <div className={`border border-slate-200 rounded-xl bg-white shadow-sm overflow-hidden ${className}`}>
      {/* Toolbar */}
      <div className="flex items-center gap-0.5 px-3 py-2 border-b border-slate-200 bg-white">
        <ToolbarButton
          title="Italic"
          isActive={editor.isActive("italic")}
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          <Italic size={16} />
        </ToolbarButton>
        <ToolbarButton
          title="Bold"
          isActive={editor.isActive("bold")}
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          <Bold size={16} />
        </ToolbarButton>
        <ToolbarButton
          title="Underline"
          isActive={editor.isActive("underline")}
          onClick={() => editor.chain().focus().toggleUnderline().run()}
        >
          <UnderlineIcon size={16} />
        </ToolbarButton>
        <ToolbarButton
          title="Strikethrough"
          isActive={editor.isActive("strike")}
          onClick={() => editor.chain().focus().toggleStrike().run()}
        >
          <Strikethrough size={16} />
        </ToolbarButton>
        <ToolbarButton title="Link" isActive={editor.isActive("link")} onClick={setLink}>
          <LinkIcon size={16} />
        </ToolbarButton>

        <Divider />

        <ToolbarButton title="Highlight block">
          <Square size={14} />
        </ToolbarButton>
        <ToolbarButton
          title="Align left"
          isActive={editor.isActive({ textAlign: "left" })}
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
        >
          <AlignLeft size={16} />
        </ToolbarButton>
        <ToolbarButton
          title="Align center"
          isActive={editor.isActive({ textAlign: "center" })}
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
        >
          <AlignCenter size={16} />
        </ToolbarButton>
        <ToolbarButton
          title="Align right"
          isActive={editor.isActive({ textAlign: "right" })}
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
        >
          <AlignRight size={16} />
        </ToolbarButton>
        <ToolbarButton
          title="Justify"
          isActive={editor.isActive({ textAlign: "justify" })}
          onClick={() => editor.chain().focus().setTextAlign("justify").run()}
        >
          <AlignJustify size={16} />
        </ToolbarButton>

        <Divider />

        <ToolbarButton
          title="Code block"
          isActive={editor.isActive("codeBlock")}
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        >
          <Code2 size={16} />
        </ToolbarButton>
        <ToolbarButton
          title="Horizontal rule"
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
        >
          <Minus size={16} />
        </ToolbarButton>
        <ToolbarButton title="Insert image" onClick={addImage}>
          <ImageIcon size={16} />
        </ToolbarButton>
        <ToolbarButton title="Insert formula (custom extension needed)">
          <Sigma size={16} />
        </ToolbarButton>

        <div className="flex-1" />

        {onDelete && (
          <button
            type="button"
            onClick={onDelete}
            title="Delete"
            className="p-1.5 rounded-md text-slate-300 hover:text-red-500 hover:bg-red-50 transition-colors"
          >
            <Trash2 size={16} />
          </button>
        )}
      </div>

      {/* Editable area */}
      <EditorContent editor={editor} />
    </div>
  );
}