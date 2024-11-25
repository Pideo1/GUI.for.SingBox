export default {
  common: {
    grid: '网格',
    list: '列表',
    add: '添加',
    added: '已添加',
    more: '更多',
    edit: '编辑',
    clear: '清理',
    update: '更新',
    delete: '删除',
    cancel: '取消',
    save: '保存',
    nextStep: '下一步',
    prevStep: '上一步',
    disabled: '已禁用',
    enabled: '已启用',
    preview: '预览',
    warning: '警告',
    disable: '禁用',
    enable: '启用',
    use: '使用',
    none: '无',
    close: '关闭',
    reset: '重置',
    pause: '暂停',
    resume: '恢复',
    details: '详情',
    updateAll: '更新全部',
    updateTime: '更新时间',
    keywords: '关键词',
    success: '成功',
    copy: '复制',
    copied: '已复制',
    auto: '自动',
    import: '导入',
    install: '安装',
    uninstall: '卸载',
    run: '运行',
    refresh: '刷新',
    confirm: '确定',
    selectAll: '全选',
    http: '远程下载',
    file: '本地文件',
    openFile: '打开文件',
    develop: '开发',
    canceled: '已取消',
    downloading: '下载中...'
  },
  kernel: {
    rule: '规则',
    global: '全局',
    direct: '直连',
    ruleDesc: '按照规则文件分流',
    globalDesc: '仅走Global策略组',
    directDesc: '直接连接所有流量',
    log: {
      disabled: '禁用日志',
      level: '日志级别',
      output: '日志保存路径',
      timestamp: '日志时间戳',
      trace: '跟踪',
      debug: '调试',
      info: '信息',
      warn: '警告',
      error: '错误',
      fatal: '致命',
      panic: '恐慌'
    },
    clash_api: {
      external_controller: 'RESTful Web API监听地址',
      external_ui: 'Web UI路径',
      external_ui_download_url: 'Web UI下载地址',
      external_ui_download_detour: 'Web UI下载地址的出站标签',
      secret: 'RESTful API密钥',
      default_mode: '工作模式',
      access_control_allow_origin: '允许的CORS来源',
      access_control_allow_private_network: '允许从私有网络访问'
    },
    cache_file: {
      enabled: '启用缓存',
      path: '缓存文件路径',
      cache_id: '缓存文件中的标识符',
      store_fakeip: '持久化FakeIP',
      store_rdrc: '持久化已拒绝的DNS响应',
      rdrc_timeout: '拒绝的DNS响应缓存超时'
    },
    inbounds: {
      enable: '启用',
      tag: '名称',
      users: 'Http/Socks验证用户',
      listen: {
        listen: '监听地址',
        listen_port: '端口',
        tcp_fast_open: 'TCP快速打开',
        tcp_multi_path: '多路径TCP',
        udp_fragment: 'UDP分段'
      },
      tun: {
        interface_name: 'TUN网卡名称',
        address: 'IPv4和IPv6前缀',
        mtu: '最大传输单元',
        auto_route: '自动设置全局路由',
        strict_route: '严格路由',
        route_address: '自定义路由',
        endpoint_independent_nat: '独立于端点的 NAT',
        stack: 'TUN模式堆栈',
        system: 'System',
        gvisor: 'gVisor',
        mixed: 'Mixed'
      }
    },
    outbounds: {
      name: '出站',
      tag: '名称',
      type: '类型',
      url: '测延迟链接',
      interval: '测试间隔(m)',
      tolerance: '测试容差(ms)',
      interrupt_exist_connections: '中断现有连接',
      direct: '直连',
      directDesc: '直连出站流量，无设置项目',
      selector: '手动选择',
      urltest: '自动选择',
      notFound: '部分出站或代理已丢失，请清理',
      needToAdd: '至少引用一个出站或订阅',
      refsSubscription: '引用订阅',
      refsOutbound: '引用出站',
      sort: '查看和排序',
      refs: '引用订阅&引用节点',
      noSubs: '订阅列表为空',
      empty: '该订阅下无可用代理'
    },
    route: {
      tab: {
        common: '通用',
        rules: '规则',
        rule_set: '规则集'
      },
      auto_detect_interface: '自动检测出站接口',
      default_interface: '出站接口名称',
      final: '默认出站标签',
      rule_set: {
        type: {
          name: '类型',
          inline: '内联',
          local: '本地',
          remote: '远程'
        },
        tag: '名称',
        format: {
          name: '格式',
          binary: '二进制',
          source: '源文件'
        },
        url: '远程链接',
        download_detour: '下载方式',
        update_interval: '自动更新间隔',
        path: '保存路径',
        notFound: '规则集已丢失',
        empty: '规则集列表为空'
      },
      rules: {
        type: '规则类型',
        action: {
          name: '规则动作',
          route: '默认',
          'route-options': '路由设置选项',
          reject: '拒绝连接',
          'hijack-dns': '劫持DNS请求',
          sniff: '协议嗅探',
          resolve: '解析DNS'
        },
        outbound: '出站标签',
        sniffer: {
          name: '启用的探测器',
          http: 'http',
          tls: 'tls',
          quic: 'quic',
          dns: 'dns',
          ssh: 'ssh',
          rdp: 'rdp'
        },
        server: 'DNS服务器',
        payload: '载荷',
        notFound: '出站丢失'
      }
    },
    rules: {
      type: {
        name: '类型',
        inbound: 'inbound',
        network: 'network',
        protocol: 'protocol',
        domain: 'domain',
        domain_suffix: 'domain_suffix',
        domain_keyword: 'domain_keyword',
        domain_regex: 'domain_regex',
        source_ip_cidr: 'source_ip_cidr',
        ip_cidr: 'ip_cidr',
        ip_is_private: 'ip_is_private',
        source_port: 'source_port',
        source_port_range: 'source_port_range',
        port: 'port',
        port_range: 'port_range',
        process_name: 'process_name',
        process_path: 'process_path',
        process_path_regex: 'process_path_regex',
        clash_mode: 'clash_mode',
        rule_set: 'rule_set',
        logical: 'logical',
        outbound: 'outbound'
      }
    },
    strategy: {
      name: '策略',
      default: '默认',
      prefer_ipv4: 'IPV4优先',
      prefer_ipv6: 'IPV6优先',
      ipv4_only: '只使用IPV4',
      ipv6_only: '只使用IPV6'
    },
    dns: {
      tab: {
        common: '通用',
        servers: '服务器',
        rules: '规则'
      },
      tag: '名称',
      address: '地址',
      client_subnet: '客户端子网',
      address_resolver: '解析本DNS服务器域名的DNS',
      detour: '出站标签',
      disable_cache: '禁用DNS缓存',
      disable_expire: '禁用DNS缓存过期',
      independent_cache: '独立缓存',
      final: '回退DNS',
      strategy: '解析策略',
      fakeip: {
        name: 'Fake-IP',
        inet4_range: 'Fake-IP范围(IPv4)',
        inet6_range: 'Fake-IP范围(IPv6)'
      },
      rules: {
        type: '类型',
        payload: '负载',
        action: '规则动作',
        server: '目标DNS服务器的标签'
      }
    }
  },
  router: {
    overview: '概览',
    subscriptions: '订阅',
    rulesets: '规则集',
    plugins: '插件',
    settings: '设置',
    debug: '调试',
    components: '组件预览',
    about: '关于',
    profiles: '配置',
    kernel: '内核',
    scheduledtasks: '计划任务'
  },
  home: {
    mode: '代理模式',
    global: '全局',
    rule: '规则',
    direct: '直连',
    quickStart: '快速开始',
    noProfile: '欢迎使用 {0}，点击按钮开始。',
    initSuccessful: '初始化配置、订阅成功',
    initFailed: '更新订阅时出错，请手动更新订阅',
    overview: {
      expandAll: '展开全部',
      collapseAll: '收缩全部',
      refresh: '刷新',
      delayTest: '延迟测试',
      stop: '停止内核',
      restart: '重启内核',
      viewlog: '查看日志',
      start: '启动内核',
      noLogs: '日志为空',
      systemProxy: '系统代理',
      tunMode: 'TUN模式',
      traffic: '流量',
      realtimeTraffic: '实时流量',
      totalTraffic: '总流量',
      connections: '活动连接',
      memory: '内存',
      transmit: '上行速率',
      receive: '下行速率',
      settings: '内核设置',
      settingsTips: '暂时生效，持久化请修改配置文件',
      updateGEO: '更新 GEO',
      needPort: '请先设置代理端口'
    },
    controller: {
      name: '控制器',
      autoClose: '自动断开连接',
      unAvailable: '展示不可用节点',
      cardMode: '卡片模式',
      sortBy: '按延迟排序',
      delay: '延迟测试URL',
      delayUrl: '请输入延迟测试URL'
    },
    connections: {
      type: '类型',
      process: '进程',
      processPath: '进程路径',
      sniffHost: '嗅探域名',
      sourceIP: '源地址',
      remoteDestination: '目标地址',
      host: '主机',
      inbound: '入站模式',
      rule: '匹配规则',
      chains: '链路',
      upload: '上行流量',
      download: '下行流量',
      uploadSpeed: '上行速度',
      downSpeed: '下行速度',
      time: '连接时间',
      close: '关闭连接',
      addToDirect: '添加到直连',
      addToProxy: '添加到代理',
      addToReject: '添加到拦截',
      active: '活动',
      closed: '已关闭',
      closeAll: '关闭所有连接',
      sort: '排序和设置显示字段',
      details: '连接详情'
    }
  },
  subscribe: {
    manual: '手动管理',
    name: '名称',
    url: '远程链接',
    localPath: '本地路径',
    website: '官网',
    path: '保存路径',
    include: '包括名称',
    exclude: '排除名称',
    includeProtocol: '包括协议',
    excludeProtocol: '排除协议',
    proxyPrefix: '代理前缀',
    updating: '更新中',
    useragent: '用户代理',
    resetUserAgent: '重置用户代理',
    inSecure: '跳过证书验证',
    healthCheck: {
      name: '健康检查',
      interval: '时间间隔(秒)',
      url: '测试链接'
    }
  },
  subscribes: {
    download: '下行流量',
    upload: '上行流量',
    total: '总流量',
    expire: '过期时间',
    subtype: '订阅类型',
    website: '官网',
    empty: '订阅列表为空，请先{action}订阅。',
    enterLink: '输入订阅链接',
    proxyCount: '代理数量',
    editProxies: '编辑节点',
    editSourceFile: '编辑节点(源文件)',
    copySub: '复制订阅链接',
    proxies: {
      type: '协议',
      name: '名称',
      add: '添加代理'
    }
  },
  profile: {
    name: '名称',
    generalSettings: '通用设置',
    advancedSettings: '高级设置',
    step: {
      name: '名称设置',
      general: '通用设置',
      inbounds: '入站设置',
      outbounds: '出站设置',
      route: '路由设置',
      dns: 'DNS设置',
      'mixin-script': '混入和脚本'
    },
    proxies: '引用节点',
    use: '引用订阅',
    noSubs: '没有可用的订阅',
    group: '策略组详情',
    rule: '规则详情',
    auto: '此配置由订阅接管，更新订阅时会被覆盖！\n如果你想修改此配置，请使用插件系统。',
    mixinSettings: {
      name: '混入配置',
      priority: '优先级',
      mixin: '混入优先',
      gui: 'GUI优先'
    },
    scriptSettings: {
      name: '脚本操作'
    }
  },
  profiles: {
    shouldStop: '当前配置正在使用，无法删除',
    empty: '配置列表为空，请先{action}配置。',
    copytoClipboard: '生成配置到剪切板',
    generateAndView: '生成配置并查看',
    copy: '复制并粘贴',
    start: '使用此配置启动/重启',
    proxyGroups: '策略组',
    rules: '规则'
  },
  ruleset: {
    manual: '手动管理',
    format: {
      name: '文件格式',
      source: '源文件',
      binary: '二进制'
    },
    rulesetType: '规则集类型',
    name: '名称',
    url: '远程链接',
    path: '保存路径',
    interval: '更新间隔',
    updating: '更新中'
  },
  rulesets: {
    hub: '规则集中心',
    total: '规则集数量为',
    noDesc: '无描述信息',
    updating: '更新中',
    fetching: '获取中...',
    empty: '规则集列表为空，请先{action}或从{import}导入。',
    rulesetCount: '规则数量',
    editRuleset: '编辑规则集文件',
    selectRuleType: '选择规则类型'
  },
  plugin: {
    trigger: '触发器',
    'on::manual': '手动触发',
    'on::startup': '启动APP时',
    'on::shutdown': '关闭APP时',
    'on::generate': '生成配置时',
    'on::subscribe': '更新订阅时',
    'on::ready': 'APP就绪后',
    'on::task': '计划任务执行时',
    'on::install': '点击安装时',
    'on::uninstall': '点击卸载时',
    'on::configure': '配置插件时',
    name: '名称',
    description: '描述',
    url: '远程地址',
    install: '需要安装',
    installed: '已安装',
    path: '保存路径',
    type: '类型',
    menus: '菜单',
    configuration: '配置',
    menuKey: '菜单名称',
    menuValue: '触发方法名',
    selectComponent: '请选择一个组件',
    confName: '配置名',
    confDescription: '配置描述',
    confKey: '配置标志',
    confDefault: '默认值',
    options: '选项',
    restore: '恢复为默认值'
  },
  plugins: {
    updating: '更新中',
    empty: '插件列表为空，请先{action}或从{import}导入。',
    source: '源码',
    reload: '重载插件',
    configuration: '配置插件',
    hub: '插件中心',
    update: '更新列表',
    updateSuccess: '列表更新成功',
    total: '插件数量为',
    removeConfiguration: '是否删除插件配置？',
    testRun: '运行测试'
  },
  scheduledtask: {
    name: '名称',
    type: '任务类型',
    script: '脚本代码',
    subscriptions: '订阅列表',
    rulesets: '规则集列表',
    plugins: '插件列表',
    cron: '表达式',
    notification: '任务完成通知',
    cronTips: '秒 分 时 日 月 星期',
    lastTime: '上次执行时间',
    'update::subscription': '更新订阅',
    'update::ruleset': '更新规则集',
    'update::plugin': '更新插件',
    'run::plugin': '运行插件',
    'run::script': '运行脚本'
  },
  scheduledtasks: {
    logs: '日志',
    name: '插件',
    duration: '持续时间',
    startTime: '开始时间',
    endTime: '结束时间',
    time: '执行时间',
    result: '执行结果',
    empty: '计划任务列表为空，请先{action}计划任务。',
    run: '立即运行',
    log: '查看日志'
  },
  settings: {
    general: '通用',
    theme: {
      name: '主题',
      light: '浅色',
      dark: '深色',
      auto: '跟随系统'
    },
    color: {
      name: '颜色',
      default: '默认',
      orange: '橘色',
      pink: '粉色',
      red: '红色',
      skyblue: '天蓝色',
      green: '绿色'
    },
    fontFamily: '字体',
    resetFont: '重置字体',
    appFolder: {
      name: '应用程序文件夹',
      open: '打开应用程序文件夹'
    },
    kernelCache: {
      name: '内核缓存',
      clear: '清除持久化缓存'
    },
    lang: {
      name: '语言',
      zh: '简体中文',
      en: 'English'
    },
    pages: {
      name: '页面可见性'
    },
    windowState: {
      normal: '以普通窗口启动',
      maximised: '最大化',
      minimised: '最小化窗口启动',
      fullscreen: '全屏'
    },
    webviewGpuPolicy: {
      name: 'Webview GPU 策略',
      always: '启用硬件加速',
      onDemand: '根据Web内容自行决定',
      never: '禁用硬件加速'
    },
    needRestart: '重启生效',
    needAdmin: '需要管理员权限',
    exitOnClose: '关闭窗口时退出程序',
    closeKernelOnExit: '退出程序时同时关闭内核',
    autoSetSystemProxy: '自动配置/清除系统代理',
    autoStartKernel: '自动启动内核程序',
    admin: '以管理员身份运行',
    addToMenu: '将插件添加到托盘菜单',
    multipleInstance: '允许多APP实例运行',
    rollingRelease: '启用滚动发行',
    startup: {
      name: '开机时启动',
      delay: '延迟(秒)'
    },
    kernel: {
      name: 'sing-box',
      version: '切换版本',
      stable: '稳定版',
      alpha: '内测版',
      grant: '授予特权'
    },
    userAgent: {
      name: '用户代理(User-Agent)',
      reset: ' 重置用户代理'
    },
    githubapi: {
      name: '向 REST API 进行身份验证',
      tips: '拥有更高的速率限制'
    }
  },
  about: {
    new: '新版本',
    restart: '重启软件',
    noDownloadLink: '没有发现下载链接',
    updateSuccessfulRestart: '更新完成，请重启软件',
    updateSuccessfulReplace: '下载完成，请手动替换软件',
    updateSuccessful: '更新完成',
    newVersion: '发现新版本',
    latestVersion: '已经是最新版本了'
  },
  titlebar: {
    resetSize: '重置窗口',
    reload: '重载界面',
    restart: '重启程序',
    exitApp: '退出程序',
    waiting: '正在等待程序退出...',
    timeout: '程序退出超时，是否强制退出？\n\n原因：插件退出超时。'
  },
  format: {
    seconds: '秒',
    minutes: '分钟',
    hours: '小时',
    days: '天',
    months: '月',
    years: '年',
    second: '秒',
    minute: '分钟',
    hour: '小时',
    day: '天',
    month: '月',
    year: '年',
    ago: '前',
    later: '后'
  },
  outbound: {
    select: '🚀 节点选择',
    urltest: '🎈 自动选择',
    direct: '🎯 全球直连',
    block: '🛑 全球拦截',
    fallback: '🐟 漏网之鱼'
  },
  tray: {
    showMainWindow: '显示主窗口',
    restart: '重启',
    restartTip: '重启程序',
    exit: '退出',
    exitTip: '退出程序',
    proxyGroup: '代理组',
    setSystemProxy: '设置系统代理',
    clearSystemProxy: '清除系统代理',
    tun: 'Tun模式',
    enableTunMode: '启用TUN模式',
    disableTunMode: '禁用TUN模式',
    kernel: '内核管理',
    proxy: '系统代理',
    startKernel: '开启内核',
    stopKernel: '关闭内核',
    restartKernel: '重启内核',
    plugins: '插件'
  },
  commands: {
    noMatching: '没有匹配到命令'
  }
}
