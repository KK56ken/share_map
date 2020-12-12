# share_map
## command line
```
$ git clone URL
```

```
$ cd share_map 
```

## docker
### build
```
$ docker build -t share_map .
```

### run
```
$ docker run --name share_map_container -p 80:8080 -v $(pash):/app share_map
```
* $(pash)はshare_mapまでの絶対パス

### stop
```
$ docker stop share_map_container
```

### exec
```
$ docker exec -it share_map_container /bin/sh
```

