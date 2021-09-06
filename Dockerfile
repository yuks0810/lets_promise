FROM python:3.8
RUN apt update && apt-get install -y \
    bzr \
    cvs \
    git \
    vim \
    mercurial \
    subversion \
    sudo \
    curl

ENV PYTHONUNBUFFERED 1
RUN mkdir /code
WORKDIR /code
ADD requirements.txt /code/

RUN pip install --upgrade pip && \
    pip install pipenv && \
    pip install -r requirements.txt

ADD . /code/