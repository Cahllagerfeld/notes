with import <nixpkgs> { };
mkShell {

  # Package names can be found via https://search.nixos.org/packages
  nativeBuildInputs = [
    # baseline 
    direnv 

    #javascript
    nodejs-16_x
  ];

  NIX_ENFORCE_PURITY = true;

  shellHook = ''
  '';
}