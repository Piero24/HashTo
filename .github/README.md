<div id="top"></div>
<br/>
<br/>

<p align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/6768/6768194.png" width="105" height="100">
</p>
<h1 align="center">
    <a href="https://github.com/Piero24/VanillaNet-cpp">HashTo</a>
</h1>
<p align="center">
    <!-- BADGE -->
    <!--
        *** You can make other badges here
        *** [shields.io](https://shields.io/)
        *** or here
        *** [CircleCI](https://circleci.com/)
    -->
    <a href="https://github.com/Piero24/VanillaNet-cpp/commits/master">
    <img src="https://img.shields.io/github/last-commit/piero24/VanillaNet-cpp">
    </a>
    <a href="https://github.com/Piero24/VanillaNet-cpp">
    <img src="https://img.shields.io/badge/Maintained-yes-green.svg">
    </a>
    <!--<a href="https://github.com/Piero24/VanillaNet-cpp">
    <img src="https://img.shields.io/badge/Maintained%3F-no-red.svg">
    </a> -->
    <a href="https://github.com/Piero24/twitch-stream-viewer/issues">
    <img src="https://img.shields.io/github/issues/piero24/VanillaNet-cpp">
    </a>
    <a href="https://github.com/Piero24/VanillaNet-cpp/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/piero24/VanillaNet-cpp">
    </a>
    <a href="https://colab.research.google.com/drive/1PKhdX0fzxX75JgCNBCbbtW9H_NRVtl_i?usp=sharing">
    <img src="https://colab.research.google.com/assets/colab-badge.svg">
    </a>
</p>
<p align="center">
    A simple FC Neural Network built from scratch in C++
    <br/>
    <a href="https://colab.research.google.com/drive/1PKhdX0fzxX75JgCNBCbbtW9H_NRVtl_i?usp=sharing"><strong>View a Demo »</strong></a>
    <br/>
    <br/>
    <a href="https://www.kaggle.com/datasets/oddrationale/mnist-in-csv">Dataset</a>
    •
    <a href="https://github.com/Piero24/VanillaNet-cpp/issues">Report Bug</a>
    •
    <a href="https://github.com/Piero24/VanillaNet-cpp/issues">Request Feature</a>
</p>


---


<br/><br/>
<h2 id="introduction">📔  Introduction</h2>
<p>
    This project is a straightforward implementation of a fully connected neural network in C++. It <strong>doesn’t rely on external machine learning libraries—only</strong> the standard C++ libraries are used, with two exceptions: OpenCV for extracting pixel values from images and nlohmann/json for saving weights and biases in a JSON file.
</p>
<br/>
<p>
    The aim of this project is to build the neural network from the ground up, offering a deeper understanding of how neural networks function internally. While frameworks like TensorFlow or PyTorch make it easy to implement neural networks with minimal effort, it’s crucial to grasp the underlying mechanics. There’s no better way to achieve this than by coding a neural network from scratch. This hands-on approach fosters a much stronger comprehension of the inner workings of neural networks, from weight initialization to forward propagation and backpropagation.
</p>
<br/>
<div align="center">
    <img src="https://miro.medium.com/v2/resize:fit:640/format:webp/0*u5-PcKYVfUE5s2by.gif" style="width: 100%;" width="100%">
    <p>Image credits to: <a href="https://medium.com/analytics-vidhya/applying-ann-digit-and-fashion-mnist-13accfc44660">Medium</a></p>
</div>
<br/>
<p>
    The neural network used for the training is a simple feedforward neural network with one hidden layer. The <strong>input layer consists of 784 neurons</strong>, corresponding to the 28x28 pixel values of the input image. The <strong>hidden layer consists of 128 neurons</strong>, and the <strong>output layer consists of 10 neurons</strong>, each representing a digit from 0 to 9. The activation function used for the hidden layer is the ReLU function, and the output layer uses the SOFTMAX function.
</p>

> [!NOTE]
> The neural network is trained on the **MNIST** dataset, which consists of **60,000 training images** and **10,000 test images**. Each image is a **28x28** grayscale image of a handwritten digit. The dataset is preprocessed and saved in CSV format. It can be downloaded from Kaggle at the following link: [MNIST in CSV](https://www.kaggle.com/datasets/oddrationale/mnist-in-csv).

<div align="center">
    <img src="https://datasets.activeloop.ai/wp-content/uploads/2019/12/MNIST-handwritten-digits-dataset-visualized-by-Activeloop.webp" style="width: 100%;" width="100%">
    <p>Image credits to: <a href="https://datasets.activeloop.ai/docs/ml/datasets/">deeplake</a></p>
</div>

<br/>  
<p>
    <strong>INTRO</strong>: The program take in input a dataset of images and for each image it extract the pixel values to have a vector of 748 elements (since the images are 28x28 in the MNIST dataset). This first layer is also called the input layer. From this poin the real network is created, by inizializing two extra layers, the hidden layer and the output layer. The hidden layer has 128 neurons and the output layer has 10 neurons. The hidden layer uses the ReLU activation function and the output layer uses the SOFTMAX activation function. Since on the creation of the network the weights and biases are randomly initialized at this point the selected weights and biased are loaded if provided.
</p>
<p>
    <strong>TRAINING</strong>: The training phase is simple as all the neural network of this type. By showing all the dataset to the network divided in batches for a certain number of epochs, the network adjust the value of the weights an biases of eache layer following these steps:
    <ol>
        <li>
            <strong>Forward Propagation</strong>
            <p>
                Images are showed to the network and the output is calculated. By making the basic matehmatical operation and also by applying the activation function.
            </p>
        </li>
        <li>
            <strong>Calculate the loss</strong>
            <p>
                After each forward propagation the loss is calculated. The loss is calculated by using the cross entropy loss function that is the most used for classification problems.
            </p>
        </li>
        <li>
            <strong>Backward Propagation</strong>
            <p>
                The backpropagation is the most important part of the training phase. It is the phase where the network adjust the weights and biases of each layer. In this project I have used the gradient descent algorithm (SGD) to adjust the weights and biases.
            </p>
        </li>
        <li>
            <strong>Update the weights and biases</strong>
            <p>
                Then the vector of the weights and biases are updated on the network.
            </p>
        </li>
    </ol>
</p>
<br/>
<div align="center">
    <img src="https://miro.medium.com/v2/resize:fit:640/format:webp/0*d9yJ5xIqdbDyjCYR.gif" style="width: 100%;" width="100%">
    <p>Image credits to: <a href="https://medium.com/analytics-vidhya/applying-ann-digit-and-fashion-mnist-13accfc44660">Medium</a></p>
</div>
<br/>
<br/>
<p>
    <strong>TEST</strong>:  The test phase is more simple than the training phase. The network is tested on a dataset that it has never seen before. The images are showed to the network and the forward pass is made. The output is compared with the real value of the image and the accuracy is calculated.
</p>

<br/>
<br/>
<p align="center">
    <a href="#top">Try a demo on Google Colab</a>
</p>
<p align="center">
    <a href="https://colab.research.google.com/drive/1PKhdX0fzxX75JgCNBCbbtW9H_NRVtl_i?usp=sharing">
        <img src="https://colab.research.google.com/assets/colab-badge.svg">
    </a>
</p>

<p align="right"><a href="#top">⇧</a></p>

<h2 id="made-in"><br/>🛠  Built in</h2>
<p>
    This project is entirely written in C++ and uses the OpenCV for extract the pixels value from the image and nlohmann/json for saving weights and biases in a JSON file.
</p>
<p align="center">
    <a href="https://cplusplus.com">C++</a> • <a href="https://opencv.org">OpenCV</a> • <a href="https://github.com/nlohmann/json">nlohmann/json</a> • <a href="https://cmake.org">cmake</a>
</p>
<p align="right"><a href="#top">⇧</a></p>

<h2 id="documentation"><br/><br/>📚  Documentation</h2>

> [!TIP]
> In the file [mnist_fc128_relu_fc10_log_softmax_weights_biases.json](https://github.com/Piero24/VanillaNet-cpp/blob/main/Resources/output/weights/mnist_fc128_relu_fc10_log_softmax_weights_biases.json) are the weights and biases present in the trained model which allowed to obtain an accuracy of 98%.

<p>
    The neural network is fully customizable. You can define the number of inputs for each neuron, the number of neurons for each layer, the total number of layers, and even the activation function for each layer individually <strong>(ReLU, Sigmoid, Tanh, Softmax)</strong>. This flexibility allows you to tailor the network architecture to suit a wide range of tasks, from simple binary classification to more complex multi-class problems.
</p>
<p>
    Additionally, for the training phase, you have the option to set key hyperparameters such as the number of <strong>epochs</strong>, the <strong>learning rate</strong>, and the <strong>batch size</strong>, giving you full control over the optimization process. If you have an additional dataset, it’s also possible to use it to train the network by making the necessary adjustments to the code, allowing for easy experimentation with different data and configurations.
</p>
<p>
    This customizable approach ensures that the network can be adapted to a variety of use cases, helping to deepen your understanding of how different architectures and training parameters affect performance.
</p>

> [!NOTE]
> If you have a pythorch model and you want to try this project with yourt weights and biases, you can export them from the `.pt` to `.json` by using the script [ptToJson](https://github.com/Piero24/VanillaNet-cpp/blob/main/src/scripts/ptToJson.py).

<p>
    For a broader view it is better to refer the user to the documentation via links: <a href="https://github.com/Piero24/VanillaNet-cpp/blob/main/.github/doc.md">Documentation »</a>
</p>

> [!WARNING]  
> The **softmax activation function** is used only in the output layer. Is not possible to use it in the hidden layers.


<p align="right"><a href="#top">⇧</a></p>


<h2 id="prerequisites"><br/>🧰  Prerequisites</h2>
<p>
    The only prerequisites for running this project are the OpenCV library. There are many ways to install OpenCV, each depending on your operating system. The official OpenCV website provides detailed instructions on how to install the library on various platforms. You can find the installation guide at the following link: <a href="https://opencv.org">OpenCV Installation Guide</a>.
</p>

If you have a mac and `homebrew` installed, you can install OpenCV by running the following command:

```sh
brew install opencv
```

<br/>

Also download the dataset from the following link: [MNIST in CSV](https://www.kaggle.com/datasets/oddrationale/mnist-in-csv).

<p align="right"><a href="#top">⇧</a></p>


<h2 id="how-to-start"><br/>⚙️  How to Start</h2>
<p>
    Depending if you want to train the model or use a pre-trained model, you have different parameters that you can use. For a more detailed list of the parameters, you can refer to the <a href="https://github.com/Piero24/VanillaNet-cpp/blob/main/.github/doc.md">Documentation »</a>.
</p>
<br/>

1. Clone the repo
  
```sh
git clone https://github.com/Piero24/VanillaNet-cpp.git
```

> [!IMPORTANT] 
> The following commands (n° 2) for building the project with `cmake`are only for Unix systems. For Windows, the commands are slightly different. You can easily find the instructions on the official CMake website. (Or just ask to chatGPT for converting the commands 😉).

2. From the folder of the project, run the following commands:

    2.1 Create a build directory
  
    ```sh
    mkdir build
    ```

    2.2 Generate build files in the build directory
  
    ```sh
    cmake -S . -B build
    ```

    2.3 Build the project inside the build directory
  
    ```sh
    make -C build
    ```
3. [ONLY IF YOU WANT TO USE A DATASET COMPRESSED IN A CSV LIKE THE MNIST DATASET] Create a folder inside `./Resources/Dataset/csv/` and put the datasets in csv format inside it.To esxtract the images from the csv file, run the following command:

    ```sh
    ./VanillaNet-cpp -csv ./Resources/Dataset/csv/
    ```

    The images will be saved in the folder `./Resources/Dataset/mnist_test` and `./Resources/Dataset/mnist_train`.

4. Now as described before the parameter that you have to pass deends on if you want to train the model or use a pre-trained model. or make both the training and the testing.

    4.1 If you want ONLY to train the model, run the following command:
  
    ```sh
    ./VanillaNet-cpp -Tr <path_to_training_dataset> -E <number_of_epochs> -LR <learning_rate> -BS <batch_size>
    ```

    4.2 If you want ONLY to test the model, run the following command:
  
    ```sh
    ./VanillaNet-cpp -Te <path_to_testing_dataset> -wb <path_to_weights_and_biases>
    ```

    4.3 Train and test the model:
  
    ```sh
    ./VanillaNet-cpp -Tr <path_to_training_dataset> -E <number_of_epochs> -LR <learning_rate> -BS <batch_size> -Te <path_to_testing_dataset> -wb <path_to_weights_and_biases>
    ```

> [!NOTE] 
> 1. During the training phase, the weights and biases are saved multiple times in the folder `Resources/output/weights/` in order to have a backup of the weights and biases at the end of each epoch.
> 2. If you are using the MNIST dataset, you have to replace the `<path_to_training_dataset>` with the path to the folder `./Resources/Dataset/mnist_train` and `<path_to_testing_dataset>` with the path to the folder `./Resources/Dataset/mnist_test`.

<br/>
<div align="center">
    <img src="https://raw.githubusercontent.com/Piero24/VanillaNet-cpp/main/.github/out.png" style="width: 100%;" width="100%">
</div>
<br/>
<p align="right"><a href="#top">⇧</a></p>


---


<h3 id="responsible-disclosure"><br/>📮  Responsible Disclosure</h3>
<p>
    We assume no responsibility for an improper use of this code and everything related to it. We do not assume any responsibility for damage caused to people and / or objects in the use of the code.
</p>
<strong>
    By using this code even in a small part, the developers are declined from any responsibility.
</strong>
<br/>
<br/>
<p>
    It is possible to have more information by viewing the following links: 
    <a href="#code-of-conduct"><strong>Code of conduct</strong></a>
     • 
    <a href="#license"><strong>License</strong></a>
</p>

<p align="right"><a href="#top">⇧</a></p>


<h3 id="report-a-bug"><br/>🐛  Bug and Feature</h3>
<p>
    To <strong>report a bug</strong> or to request the implementation of <strong>new features</strong>, it is strongly recommended to use the <a href="https://github.com/Piero24/VanillaNet-cpp/issues"><strong>ISSUES tool from Github »</strong></a>
</p>
<br/>
<p>
    Here you may already find the answer to the problem you have encountered, in case it has already happened to other people. Otherwise you can report the bugs found.
</p>
<br/>
<strong>
    ATTENTION: To speed up the resolution of problems, it is recommended to answer all the questions present in the request phase in an exhaustive manner.
</strong>
<br/>
<br/>
<p>
    (Even in the phase of requests for the implementation of new functions, we ask you to better specify the reasons for the request and what final result you want to obtain).
</p>
<br/>

<p align="right"><a href="#top">⇧</a></p>
  
 --- 

<h2 id="license"><br/>🔍  License</h2>
<strong>MIT LICENSE</strong>
<br/>
<br/>
<i>Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including...</i>
<br/>
<br/>
<a href="https://github.com/Piero24/VanillaNet-cpp/blob/main/LICENSE">
    <strong>License Documentation »</strong>
</a>
<br/>
<p align="right"><a href="#top">⇧</a></p>


<h3 id="third-party-licenses"><br/>📌  Third Party Licenses</h3>

In the event that the software uses third-party components for its operation, 
<br/>
the individual licenses are indicated in the following section.
<br/>
<br/>
<strong>Software list:</strong>
<br/>
<table>
  <tr  align="center">
    <th>Software</th>
    <th>License owner</th> 
    <th>License type</th> 
    <th>Link</th>
  </tr>
  <tr  align="center">
    <td>OpenCV</td>
    <td><a href="https://opencv.org">OpenCV</a></td>
    <td>Apache-2.0 license</td>
    <td><a href="https://github.com/opencv/opencv">here</a></td>
  </tr>
  <tr  align="center">
    <td>nlohmann/json</td> 
    <td><a href="https://github.com/nlohmann">nlohmann</a></td>
    <td>MIT</td>
    <td><a href="https://github.com/nlohmann/json">here</a></td>
  </tr>
  <tr  align="center">
    <td>pyTorch</td>
    <td><a href="https://pytorch.org">PyTorch</a></td>
    <td>Multiple</td>
    <td><a href="https://github.com/pytorch/pytorch">here</a></td>
  </tr>
</table>

<p align="right"><a href="#top">⇧</a></p>


---
> *<p align="center"> Copyrright (C) by Pietrobon Andrea <br/> Released date: 15-09-2024*