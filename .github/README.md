<!-- **WEBSITE** -->

<div id="top"></div>
<br/>
<br/>

<p align="center">
  <img src="https://raw.githubusercontent.com/Piero24/HashTo/2f8526908d337f0fb829211b930709d77cf32b04/src/assets/logo.svg?token=AHZS2P2QQACXAQND47V7GYDHMQCEU" width="105" height="100">
</p>
<h1 align="center">
    <a href="https://github.com/Piero24/HashTo">HashTo</a>
</h1>
<p align="center">
    <!-- BADGE -->
    <!--
        *** You can make other badges here
        *** [shields.io](https://shields.io/)
        *** or here
        *** [CircleCI](https://circleci.com/)
    -->
    <a href="https://github.com/Piero24/HashTo/commits/master">
    <img src="https://img.shields.io/github/last-commit/piero24/HashTo">
    </a>
    <a href="https://github.com/Piero24/HashTo">
    <img src="https://img.shields.io/badge/Maintained-yes-green.svg">
    </a>
    <!--<a href="https://github.com/Piero24/HashTo">
    <img src="https://img.shields.io/badge/Maintained%3F-no-red.svg">
    </a> -->
    <a href="https://github.com/Piero24/twitch-stream-viewer/issues">
    <img src="https://img.shields.io/github/issues/piero24/HashTo">
    </a>
    <a href="https://github.com/Piero24/HashTo/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/piero24/HashTo">
    </a>
</p>
<p align="center">
    A Website for mapping exercises from famous books or courses into leetcode problems.
    <br/>
    <a href="**WEBSITE**"><strong>Visit Website »</strong></a>
    <br/>
    <br/>
    <a href="https://github.com/Piero24/HashTo/issues">Report Bug</a>
    •
    <a href="https://github.com/Piero24/HashTo/issues">Request Feature</a>
</p>


---


<br/><br/>
<h2 id="introduction">📔  Introduction</h2>
<p>
    
</p>
<br/>
<p>
    
</p>
<br/>
<div align="center">
    <img src="https://miro.medium.com/v2/resize:fit:640/format:webp/0*u5-PcKYVfUE5s2by.gif" style="width: 100%;" width="100%">
</div>
<br/>

> [!NOTE]
> The neural network is trained on the **MNIST** dataset, which consists of **60,000 training images** and **10,000 test images**. Each image is a **28x28** grayscale image of a handwritten digit. The dataset is preprocessed and saved in CSV format. It can be downloaded from Kaggle at the following link: [MNIST in CSV](https://www.kaggle.com/datasets/oddrationale/mnist-in-csv).

<div align="center">
    <img src="https://datasets.activeloop.ai/wp-content/uploads/2019/12/MNIST-handwritten-digits-dataset-visualized-by-Activeloop.webp" style="width: 100%;" width="100%">
</div>

<br/>  
<p>
    
</p>
<br/>
<br/>
<p>

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
> In the file [mnist_fc128_relu_fc10_log_softmax_weights_biases.json](https://github.com/Piero24/HashTo/blob/main/Resources/output/weights/mnist_fc128_relu_fc10_log_softmax_weights_biases.json) are the weights and biases present in the trained model which allowed to obtain an accuracy of 98%.

<p>
   
</p>
<p>

</p>
<p>

</p>

> [!NOTE]
> If you have a pythorch model and you want to try this project with yourt weights and biases, you can export them from the `.pt` to `.json` by using the script [ptToJson](https://github.com/Piero24/HashTo/blob/main/src/scripts/ptToJson.py).

<p>
    For a broader view it is better to refer the user to the documentation via links: <a href="https://github.com/Piero24/HashTo/blob/main/.github/doc.md">Documentation »</a>
</p>

> [!WARNING]  
> The **softmax activation function** is used only in the output layer. Is not possible to use it in the hidden layers.


<p align="right"><a href="#top">⇧</a></p>


<h2 id="Contributions"><br/>🧰  Contributions</h2>
<p>

</p>
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
    To <strong>report a bug</strong> or to request the implementation of <strong>new features</strong>, it is strongly recommended to use the <a href="https://github.com/Piero24/HashTo/issues"><strong>ISSUES tool from Github »</strong></a>
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
<a href="https://github.com/Piero24/HashTo/blob/main/LICENSE">
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
> *<p align="center"> Copyrright (C) by Pietrobon Andrea <br/> Released date: 05-01-2025*