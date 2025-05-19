#!/bin/bash

# Static files
FILES=(
  "components/Auth/FallbackLogin/FallbackLogin.tsx"
  "components/Footer/FallbackFooter/FallbackFooter.tsx"
  "components/Navbar/FallbackNavbar/FallbackNavbar.tsx"
  "components/ProductCategoriesComponents/ProductListLayoutComponents/FallbackGrid/FallbackGrid.tsx"
  "components/ProductCategoriesComponents/ProductListPageLayout/FallbackLayouts/FallbackLayout.tsx"
  "components/ProductPageComponents/ProductInformationComponents/FallbackProductInformation/FallbackProductInformation.tsx"
)

# Add dynamic files from PersonalisedCart folder
for file in components/Cart/PersonalisedCart/*; do
  if [[ -f "$file" ]]; then
    FILES+=("$file")
  fi
done

# Apply assume-unchanged
for file in "${FILES[@]}"
do
  echo "Marking $file as assume-unchanged"
  git update-index --assume-unchanged "$file"
done

echo "✅ All specified files are now marked as assume-unchanged."
