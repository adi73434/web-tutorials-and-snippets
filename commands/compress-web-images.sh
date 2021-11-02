#!/bin/bash
echo "Use positional parameters: First is the source directory, \n
	Second is the extension of source files (* not supported), \n
	Third is what output files to use (jpeg|avif|webp|all)"

echo "This requires ImageMagick"

cd "$1" || echo "Failed to enter specified dir" || exit

# Make required subdirectories
if [[ $3 = "jpeg" ]] || [[ $3 = "all" ]]
then
	# mkdir ./256wide-jpeg-q75 &
	# mkdir ./512wide-jpeg-q75 &
	mkdir ./768wide-jpeg-q75 &
	mkdir ./1536wide-jpeg-q75 &
	mkdir ./full-jpeg-q75 &
	mkdir ./256wide-jpeg-q50 &
	mkdir ./512wide-jpeg-q50 &
	mkdir ./768wide-jpeg-q50 &
	mkdir ./1536wide-jpeg-q50 &
	mkdir ./full-jpeg-q50
fi
if [[ $3 = "avif" ]] || [[ $3 = "all" ]]
then
	# mkdir ./256wide-avif-q75 &
	# mkdir ./512wide-avif-q75 &
	mkdir ./768wide-avif-q75 &
	mkdir ./1536wide-avif-q75 &
	mkdir ./full-avif-q75 &
	mkdir ./256wide-avif-q50 &
	mkdir ./512wide-avif-q50 &
	mkdir ./768wide-avif-q50 &
	mkdir ./1536wide-avif-q50 &
	mkdir ./full-avif-q50
fi
if [[ $3 = "webp" ]] || [[ $3 = "all" ]]
then
	# mkdir ./256wide-webp-q75 &
	# mkdir ./512wide-webp-q75 &
	mkdir ./768wide-webp-q75 &
	mkdir ./1536wide-webp-q75 &
	mkdir ./full-webp-q75 &
	mkdir ./256wide-webp-q50 &
	mkdir ./512wide-webp-q50 &
	mkdir ./768wide-webp-q50 &
	mkdir ./1536wide-webp-q50 &
	mkdir ./full-webp-q50
fi

echo "a"

# First argument is directory, second argument is file extension, third argument is files to output
for i in *."$2"; do
	if [[ $3 = "jpeg" ]] || [[ $3 = "all" ]]
	then
		echo "Compressing $i with JPEG"
		# convert "$i" -quality 75 -resize 256 "./256wide-jpeg-q75/${i%.*}.jpeg"
		# convert "$i" -quality 75 -resize 512 "./512wide-jpeg-q75/${i%.*}.jpeg"
		convert "$i" -quality 75 -resize 768 "./768wide-jpeg-q75/${i%.*}.jpeg"
		convert "$i" -quality 75 -resize 1536 "./1536wide-jpeg-q75/${i%.*}.jpeg"
		convert "$i" -quality 75 "./full-jpeg-q75/${i%.*}.jpeg"

		convert "$i" -quality 50 -resize 256 "./256wide-jpeg-q50/${i%.*}.jpeg"
		convert "$i" -quality 50 -resize 512 "./512wide-jpeg-q50/${i%.*}.jpeg"
		convert "$i" -quality 50 -resize 768 "./768wide-jpeg-q50/${i%.*}.jpeg"
		convert "$i" -quality 50 -resize 1536 "./1536wide-jpeg-q50/${i%.*}.jpeg"
		convert "$i" -quality 50 "./full-jpeg-q50/${i%.*}.jpeg"
	fi
	if [[ $3 = "avif" ]] || [[ $3 = "all" ]]
	then
		echo "Compressing $i with avif"
		# convert "$i" -quality 75 -resize 256 "./256wide-avif-q75/${i%.*}.avif"
		# convert "$i" -quality 75 -resize 512 "./512wide-avif-q75/${i%.*}.avif"
		convert "$i" -quality 75 -resize 768 "./768wide-avif-q75/${i%.*}.avif"
		convert "$i" -quality 75 -resize 1536 "./1536wide-avif-q75/${i%.*}.avif"
		convert "$i" -quality 75 "./full-avif-q75/${i%.*}.avif"

		convert "$i" -quality 50 -resize 256 "./256wide-avif-q50/${i%.*}.avif"
		convert "$i" -quality 50 -resize 512 "./512wide-avif-q50/${i%.*}.avif"
		convert "$i" -quality 50 -resize 768 "./768wide-avif-q50/${i%.*}.avif"
		convert "$i" -quality 50 -resize 1536 "./1536wide-avif-q50/${i%.*}.avif"
		convert "$i" -quality 50 "./full-avif-q50/${i%.*}.avif"
	fi
	if [[ $3 = "webp" ]] || [[ $3 = "all" ]]
	then
		echo "Compressing $i with WebP"
		# convert "$i" -quality 75 -resize 256 "./256wide-webp-q75/${i%.*}.webp"
		# convert "$i" -quality 75 -resize 512 "./512wide-webp-q75/${i%.*}.webp"
		convert "$i" -quality 75 -resize 768 "./768wide-webp-q75/${i%.*}.webp"
		convert "$i" -quality 75 -resize 1536 "./1536wide-webp-q75/${i%.*}.webp"
		convert "$i" -quality 75 "./full-webp-q75/${i%.*}.webp"

		convert "$i" -quality 50 -resize 256 "./256wide-webp-q50/${i%.*}.webp"
		convert "$i" -quality 50 -resize 512 "./512wide-webp-q50/${i%.*}.webp"
		convert "$i" -quality 50 -resize 768 "./768wide-webp-q50/${i%.*}.webp"
		convert "$i" -quality 50 -resize 1536 "./1536wide-webp-q50/${i%.*}.webp"
		convert "$i" -quality 50 "./full-webp-q50/${i%.*}.webp"
	fi
done