import './ColorSwatch.css';

interface ColorSwatchProps {
  name: string;
  token: string;
  hex: string;
  usage: string;
  large?: boolean;
}

export function ColorSwatch({ name, token, hex, usage, large }: ColorSwatchProps) {
  return (
    <div className={`color-swatch ${large ? 'color-swatch--large' : ''}`}>
      <div
        className="color-swatch__preview"
        style={{ backgroundColor: hex }}
      />
      <div className="color-swatch__info">
        <span className="color-swatch__name">{name}</span>
        <code className="color-swatch__token">{token}</code>
        <span className="color-swatch__hex">{hex}</span>
        <span className="color-swatch__usage">{usage}</span>
      </div>
    </div>
  );
}

interface SwatchGroupProps {
  title: string;
  swatches: ColorSwatchProps[];
}

export function SwatchGroup({ title, swatches }: SwatchGroupProps) {
  return (
    <div className="swatch-group">
      <h4 className="swatch-group__title">{title}</h4>
      <div className="swatch-group__grid">
        {swatches.map((s) => (
          <ColorSwatch key={s.token} {...s} />
        ))}
      </div>
    </div>
  );
}