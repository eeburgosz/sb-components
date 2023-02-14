/// <reference types="react" />
import "./mylabel.css";
export interface MyLabelProps {
    /**
     * Este es el mensaje a mostrar en la etiqueta
     */
    label: string;
    /**
     * Este es el tamaño de la etiqueta
     */
    size: "normal" | "h1" | "h2" | "h3";
    /**
     * Este es el color de la etiqueta
     */
    color?: "primary" | "secondary" | "tertiary";
    /**
     * Capitaliza o no la palabra (label)
     */
    allCaps?: boolean;
    /**
     * Paleta de colores de la funete (label)
     */
    fontColor?: string;
    /**
     * Color de fondo
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ allCaps, color, label, size, fontColor, backgroundColor, }: MyLabelProps) => JSX.Element;
