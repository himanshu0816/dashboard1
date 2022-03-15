/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
// import img1 from '../../../../../public/media/icons/'
import {KTSVG} from '../../../../_metronic/helpers'
// import {Dropdown1} from '../../content/dropdown/Dropdown1'
import {Dropdown1} from '../../../../_metronic/partials/content/dropdown/Dropdown1'

type Props = {
className: string
}

const ListsWidget6: React.FC<Props> = ({className}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header align-items-center border-0 mt-4'>
        <h3 className='card-title align-items-start flex-column'>
          {/* <span className='fw-bolder mb-2 text-dark'>Activities</span> */}
          <span className='fw-bolder mb-2 text-dark'>Apps and Urls</span>
          <span className='text-muted fw-bold fs-7'>890,344 interactions</span>
        </h3>
        
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body pt-5'>
        {/* begin::Timeline */}
        <div className='timeline-label'>
          {/* begin::Item */}
          <div className='timeline-item'>
            {/* begin::Label */}
            <div className='timeline-label fw-bolder text-gray-800 fs-6'>08:42</div>
            {/* end::Label */}
            {/* begin::Badge */}
            <div className='timeline-badge'>
              <i className='fa fa-genderless text-warning fs-1'></i>
            </div>
            {/* end::Badge */}
            {/* begin::Text */}
            <div className='fw-mormal timeline-content text-muted ps-3'>
              Outlines keep you honest. And keep structure
            <div className='row'>
                <div className='col-3'>
                    <p>hello</p>
                </div>
                <div className='col-3'>
                    <p>hello</p>
                </div>
                <div className='col-3'>
                    <p>hello</p>
                </div>
                <div className='col-3'>
                    <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAS0AAACnCAMAAABzYfrWAAACx1BMVEX////7+/v8/Pz6+vr+/v4kbrmHh4d+fn7q6ur/AAAA/wDC6fz39/cda7jx8fH+/fsNaLhYicHh39zt+P6rtMCZstHb8v1ni7b/7rLc3Nw9eLcAY7VmkcQA6AD/+/8mJibDw8MA1QCsv9edr8YAAADDzcPB1OXQ0NDo3ei4ws6647rjubnN1uI9l+K53bqa/5rCtLTiAACfx5/O5vzE4sW4y+T/VwCP/48A9QBERERT/1Pj9f7GnZ3MHx/wAADXAAAAxwD/GRn2//a8/7zu/+6y/7Kj/6PPfn7BQUG/X1//sbGI/4ja/9rO/84AheXg6PPS6dP/4QDm/+bW0dZ7oM+4uLgArQC7oAD/zs7/4eHh5f88/zywrqx+nrP/7eAAXLO5oKCLwYu+AACkAACs/6wAlgAAuwDj8ePC4PsA3wCvy6/z6bbk5KWGmIbcOwDOrwDmwwBZWVqvlwAAjaX/VVXC1ZH/l5fjsbHcycLMy+SIi65/dceMh8+dpd1oY8Otrdh4jJWctrxsg4+pxdCjvsTL9v9cc4b/3cSdn6etn4+9tKz/0qb/t3j/wZCN8qtL8nFk8Yo5PEkxHABYYml6bGMYIjReUDWhx+tkm2SGoYYPj+UAfOaSZWWrVFRuq+Z+pH6oPj5OpE58yXx7Xl6mIyN/rUDPeHiJu7AxoTGYe3rWODhLKytpkWW2aHrBSEs+wUCzOACzjHpmAABxhgCVIyOXuZdlymV9sX07njujkGrWx5jIoXy24om19nni472+IUtIrnBBvOOzWTOnYEynlkwAiACCeVkvdS+WiZZiUWKCGAC6NwCfOxR2bjadiiJcTwBoY0RcRVwxQTEAXnGSRzEmSE5Je0kAyu1oMB5/T0ONaABwfnAAVgAAmrX8s53/cXF/2UThd0Xgk6H6SmH4LkD2fn+E0Ez1YnzKlTjcgUXAsU7qZDquuEbVP4OLAAAgAElEQVR4nO2dj2MTx53oZ3/YXturXUlr+VhJKGun1tqOsQ2ybBMoEIEhwTZrI8nEIH4HzI8GDEkDXK8thiRV07ukffBKjktybdJftHdJ7kfaJu1Lf0JIIFzfa67XtJfSl4O+d3fvj3jfmd2VdlcrIWOLGK6DkXZ2vjPznY9mZr8zO7OLFtf80ZXrFqMa9EdXrqvGtNicQ1aPfoLmeYbn4YDHjoIvhuEplvho4+ujLsWtcpiWnHfI6sGOQxwjHhN5AQkEDAdfxzpEzvBxAJLXhHx6rD15h/cGwaWl2eJBdj/8tIUJSzfhKEcmhJY/mfxTP5DxE1qK6vcrfn+OliB+6s/+DAEtFNEQEgR0TGvdCF/oGPbBqchGCy1HBrRDbWo6XoefKSHKWqs3w9plSdTG+um7JVDCCAtFRK2f+tSnTVptDZhW8lOEVlpJZ7KKgulVpwmtz7R+BtOKHDumEVqCdgy+Ip/+NHy1HvvsxrlPi7ppWoxeT499+rOfQrm6lfTnWmI6nc40ZIjPT+oWgNUwLRYdOxYBTK3HjuFKdeyzmB3LasBubtHiZ5EWpIWzOvYZaF9F+y3V2m/RIsUALYYRRE0QGEoUGUGgRI1nODhJ2fqtGdFyXi3sfqqop5BWYT4GreNT9VPHA/X1UyfwX339Znzy5NTmJ6Y21x8/Tg7he2pz9ORmnVaEjeTTwbQY3nQMRekeJn+GF7BjABh2PKV/8bYvijEcxTNW5/Dii6k92OEtJW0TdsS0iVJCYcKUiGlN1T9+AiAcx4ROwDGcOVN/cg8wCkSn7p46A7766Ob6U5sxsyzQAhwYCaN/sroFYf9pblgF2BIVZlZb4k3WLaZI3Tp5/OTJwNSZx8/UE2JPVO+pn4K/k/Un735i6viTj5+ZwrCeeHxPdf3U1OYpUrfsBdBpOdvA9GhZOwnnld3h6JJeZ+TZ7uVPQmXaDDWsfnP0OFSezaQlRvHJkzgwe3f93VPHT9Yfv/tk/eNGSyyklfa3ieioxiJijWbgg0f+tMZyaQkhsUHFp9MsEhHiEFLUNtCFRoriTysKpKDKSPEr6CkVezjwcGmkwn+E/IhXVFlMqyoW44QOVd6SBnEkfg5SFFkRbWHRliJcZ0BrNnv5Qlqfr85mqjPZbAYsh2qUfSqb4dijHdWfhzNZJFbDCQhVspkGlNW2NIjgq86yn88e1T7fhtCWDnVLtiON/CoARUpazMoZlOl4CtRX0dGGljRKK1kQ01A6w3UoR9sA6pbPfeHPt3zhL+DfF/7ic7cbLVlUoXbIquqH/whbWkqHoHCKqh5tS4twTlXBZlXVBrAjoCopssKprKriGAhXGqhvHRAfMCAOPEkIIB4/x0NiahpOgpggtCky2L24brHiFiRu2bJFgP+3G61CZ2Zm6MDafCULdYMho6NnuoH0R2udxvaYtNKHDHdXOddER96levkZXRNnqZd3rVtLGqfpnn7mi10DegGyXzr95H87der0xz7mSqtwmGVTrVK0KmnL26StWon2sJx3fV1d3YpWIpr979UXv1xT89sitD6iuvWR0HLXIbG6a1Pdi/NbSX3Pfsx0eJzIGZIygBWTcICHMhyHzBHNfzlaQ4OrE2jlgGrQ4lTD1QAthcso6lNgPSX9bYqaVf0NaSWt+dsyGcZFz7lPy7WXt0mXoEUjcWBwpX7cYtDKOXxNVP3EGuBUWZD9YC0QU4ISkqp6e9KaUd1a39e13jx2pcVxnJ9zdbyLnnc0rZVmtSIuT0sGFrKfNeyt0nbQrRpVV3LGxibtTmtVV98QsszPWGgpbXgaSyAzNgzjmCuZltfmn4bodKX54kF2v8BPJx/dE4kMDz6UiFDWMBZo6UeUIPK8wM+tGZtZqluuMzY26YK6lVjdN1wo6tpv/de2TilsMHStcoiSHruitERwvFjSMXavLp1Lr/RsYKVoDdh6dkNUwR8VpCUEbtbFRda1UIgvrsVs0Vrf1bfeRbR7B7bMK0irY6v35lwozBehpRbXYnZorRwcECNuot0LJVRJWmxHqOrmnOdPONq9UDu3FdViFmz5VV2DQ4VhtwEtyr1Qy5cW1WLGdWsYDwVdwv5Iq0A68dDgcJGwPC3+FtAKhUIeIOA1UIDPG/J6QviENxQyTsOpKq+FlpG9qQUrkn6/UrSsBkMJWsotoKUhzecJhaOhKq/HUxXStFRACqS0qrjH2yxJATgJ7ALRQFU8BOEGLd5qUMD3GVngKbYytMBguPH8lk7L/6zAVpbWVmlrKq75olqwQ0t5vIwW1LZqgWgqEPI2p8IdcS0MALVmLYWa41Gdlq8t6nDr1i0IdPA3S6tEL7++DxsM5dFS8Tyf212M2WyJkicckIIoWiUFoIIFARoArIoDrmYtGoyHU4GtWrMPIAa1uNEWFzjdOnALtFmvW9hgKChAMVrCXwpIo5hK0wppKdYXj/q0eNhTxUcDUFdCvkA07omnQqFoKihFA/GwFqRSAS3sIS1R9dudClVL8fP0rNKCoeCQWwGK0Ur2J8WzgmEKqrIsyDIza6Nqk5bHV1Xl8wV9Vb4qYOGp8oW8Ya8n5QmnvMEghAbxKQiFo7DPo/dbft7uBL+fAz0ddWsGMzYRNNxnGAwFBXCntRzTiv5VVNBF00k8YyPN3oyNaUHgKyLGhP8ZXvzn0f36f+NfvpfX17GYCZPFPQzDPqeyAu+ebckZG7uXiiQe6huORIpEdiscxadZ4WFuwbqAXw+maYqiZnGNzWzY8s4ZGwUhWbBnU0ylEnVrqG/1Kof0je/5QNZIg87Tb9NpLlunhBZvz6ZIGYtfE8kMwzTm5fO0xDNn163z23KdC7TCJWg9v9SeTZEyFqFlzjBMgxat3y6EKs0KAd9RzhY8i7Rufg6iyKga0/r4GnctyrkmruwbEN2lS9BiFfMuBcufSfn5ClkQQkfDTboOociMjXLTtCJWg2G6tChjpkh8IcVRFZrfYsnCVE6wOYfXPTi3l8NlfusmaQ1ZDYbp0mJ1Wqz4QoCrkC2P9C0vjH3jC0M7/K7eIorjFnEztLDBYA+eHi35Yf2IX9BcqXGie94zvosBtGQ3LYrTIgaD64RoXro0re1NJDrLn227/Wh1R1y0KEYLGwyRmdzZB1otf60fCWdVoWIt0S3v2aA19j3U3e3UwpXWKt1gmNE6CNxvJfUjbp18+9WtFdvR/Q84tXChNWwaDDOihXLXRJY7CwbEbUXrK0vLo2U1GGa0IqnlWUQbtDpuO1oyHymDlt1gmBGtRU0Ro26J0QV+3iiAX5U5WeVvhpYTQaVoseD3m7QYmS0iKg4MDlu3Ls2sJQItVh/Ji/EXOJMWsDJp0TTF0DbHl/QyJaSdopTDXzphuzTWCn7Hh/2Y1nNfYV1iRiJDXV2rIhFbAQRmOgWwh2FatJ6TeOaFDt5QyTALb4M1NgrCtM59xS3myj59DcOsrN8iblGTWU3FF14AU35u91tyQbBCaPFqQUtc1ZVb9Dh7606ttAICO4ftLdxhKKZHYG20BDstPHf8UH6p+0zXb+VdnpZwtnlO0xKqecxGn2FKWsr83DlECVZh51DQ2RIFwRqa11BYyjkLUIzWktiCtjlNq2W+jGnh3Xoosuu1fLA+30wseuxc5o5piyjQ+upXkbrNTHUfMlb+C0hepjoLUIRWTBPPqnyl7ie65z09Wup8mduhGLSatltoker28reJZwBXq6Kjap1WJo3W7EAC6QRfbELdO4ke6bJp0XtoVlg392ktOyqPJVGGt9HSU3ngfjx33OU6d2ylBf0W4NVp+R9G23ehbTskaN981kIrdzXJ/yQPI5bXaS2J4Snndf45T2vh0WRdkn5JtdHS3cv3DxsGw41p+dG25zEtPPuSRFQasWmUbmrN08pwzpS2r0Brvga0WBRbgoW0s6+NzH1awrMc7r3+usURnPj61y2LHo2xnKlSnhaPoAHJMqJk1L2N0GLwdVXdwbXMN2nhhr7PuJpYaX3j48jf0hjDqYo931zgZ+Y6rWVHcb+lkCujNXi4b+Dl+/NeIWP0RIZKuQJsg35PwHYtr2Ja+75FOm0FyTs5LsPotCDtyN596JzfpgOmtRxpMYib6OnsScRfmPO0+Odlg5Y1WDcYHrDQ6t5BOp5CWt9+AH2nGqsEfRCGBrCkJY3NsVgj/DVGdzQ3Rhtjm2Oxb03FdjTEGiVKj8lz6HtjWtufNkriSGfnCN5Md2bu08JfTlqmwZCjJafJjSwiSlVztgJ8+xuoRsmpJAGj2BIppyEDFl03Ev6GQzCo2dmNVBDAIrG7NzdKbXQCSPVM6KJiKsBRZgF4kUJMmXsxbj0tIzb+GNB7dqgZf/uycR5ftxSki3LLuvMFoAktaIkiuwQziDUyjnwUxO1qMTo9+IQBAsR59jX01Vd6Ol/rGUnk1wKSOz5GAcQ0fqiPvs8HhtdUObdmTOe4j2MLdog60i2ZMOjen8Q/hWw+MS3CYoOBxVd03PM+8LeNjTqtvRGRp7FoG+L1uqUPghQG3f8NpGrASTJ/WVs+GHKWN1ArSGyZGNm3qOeVF3tGZL265kSRuKAZ6pZeALyHjDP2kBXO2ExrYsUWXDqhUsFwoZfHZDxZok+YRCKRlX0DdIRloOiiCALQEiVSY775yh7og6Ze2dg2Fl/SsASOyenYxle+qUWhQkkiw7rnow8VEi0jPT2dUJd6Xv27hF9Au1/Ej/2gFGQRZfkFbRzDGmVF+s85d2ZskitU242txOouMneMLUXdGf2WSuoWjGhWtCahMqaxpRkZ2wfnI7sXYQui1Kg6DT0TdE0TuC7CZWD5GlSdQWPPkmLJNlHxLL6HPld7eSi5RXi476EEgUcsRd0ZIx8F7dsbwTG7cRwY/HHfkSPfakF/fw5FCO5iMzZgF3SO4BnpfD4ZsPYFpLg9EktcJ/NzmNb8HC1zhoGGlmeR2LaNfAGtMUIrjZK7yc0s6K6Tll1BhTPNULwJ3S5wFEAlgyTLsqecSjBM9N8OtPIzDGKs0SpM6xkpmI1OC7WaZ6xbggpoiVCpJlwLoNJIsO+9ytHSzvp59yezVJRW4Wyoq9egNZAbCiK0R3LLRjFjpvNhNo3stMSe9h4rKuSgVUQlsQMPfG4xLWSZDS0MznnVnTymZZk7BhezwTKz4R42Y1oSLramOdHT3pkodpkSRVEo2FGZ2+EQ9fl53ZsvboVp4euMUjw45+1eKLXO3943YA1cssT+0BQjG+jiXfJxm5eHrqrHdeeTXoBouKQLBn3k2xfNp11hWhiVUjw4T2vZSFd/py1d6ODt0mXTwk+HJde/HG03WmxzyFPSVelfoeb8+sA5QmvRP6xWbRYEimlOaZINj1p23YhWJNHZ3mNd7OZKS2z22pe/er1kebqxLj3nvHcLt5AW9zxXNNiwg1YPDsNQ9+G8VlCx2AJpko1qi5lXKV+AiZ7OHrH0pdiNlicQj4dDHi80vY+SlrpMRsUclh7qw/vfVHztNCPThklaSMv/sHs+RgH02RaqQOMyaIU0X7AqHmwOh1HA+xHR4l6RMS3F9C/ttgVHkLlhXrVEjpkmaSGtF5vc88EqJUyrqry7r05aHZrmCyNfIKAFPQW0OF4QBa7S48TWflVeJnO70sY9quVrrKHkloRe84RcZDZvZRU+PUPOuudjTuERV96d/YK6VbU1lEJhoFVVSEuV/fCPu6lVIyWWgtgTwrRw3cryYEpGxlrw4rXnv4HIDAO7cnDgte+j7p08yxrzDhBZ1Pbg+Qa3xLAWrIocQVByvVLhqSRj9oBiS0+F4AKwDlreZk1LRauiqVQq7miJHMX6BU7g/Oim5rdKLFS2Hut1S92h6rOheCocaN3/Ms5wVVdfeyueCt+2g4d2o0egELVnieV1AHatSNKqbcYKYaOKXP+sKvF0OQVwXhO9eFMz/PN4HOfvzi+nnI2WWKzfUr8mAC2MCtrZ17YZtF5+GW+YfyiButNAi2XTeDme0Z4arYNo12eN2K+JuaHyTayxydPCW78JKZ0OsSO8NlpmxEr28soyrrVf0bt4dvlSTGvnUqA1MDiMIhx6+Wvoe7twpctd6CyzMy6FtNEyZhVyKk3/6Rk5Wl4pGNdQsDkVx/vnvfGUt8oLx2bv9VHQQv/YjW/hyWjoi2TDPCUjVS+5Yi4TcY4LS9IasaByFmB610RvXAqGUs0pNiBJKQ94w9JWPhzXtkqhW0pL3WGhBY0xGTGenabKeE2HXzewconFJMfDNIvRwhdA56zCDOrW1o5gSPMGo+F4KuANeuJhABVujgcMs+uW2VsqytMCt8p8JN+2bvTADnzHySKNJ5Sdpq0LLRnaH0blUHgmtMAurdJCQT4AgEIpTfJocSkVD6JbbZ0qVlorBx8yC4nXKvA2aYkYWaVpRfCgpnOEdQmaES2yE9zj8QXBVXnJxm84TmmhW07LWNOAVhnL2fVgnrFJSzHXkY7Dn7BOKswmLXPrt8fcB443fHsDwVvcywMnlnzmnrBTYIKTW15LWLfIdv9I5whTJIiodPO9fBGXm4q4ZbRkPFErvph/wo5D7SUxu81QjJbY0z7hCJ0NWuVtbb6Fo+qIPsPgEkw1xgougu60oAkmCrSYeUtk48Hy3C2bDbQ/ks8MpskaBZdu3Y1WorPHTYtZoCUK/nIcx+djV45W66q+vvURhyjpqBqlQmk3L/R6E+09Od8s04I4+oMySr00h+EZCktzgiByFZyxGX4FL2d33E+UYnZ73ZGwcy/GRLvVXp9OvzWNApQlmu7Izdjo7/ixOt7hpW1ehzRtlcbHkUhidd+iva0siOZDRDEW0xhRLJWPJVGWHVk0wrLFhB0xrSrRPEMXT7igAPYwZ0xdlMZveapQ3RrCaxjws9ltdasxxtwoYYsWYg+esioufIOWOGt1q7J3XyPiQ/pydrwWy5KZ0QRLq5bzjnT2iAXBs91v3UAH3VWU1vou3WBQkLxLzmcWi7k/TcTVO9Le6WrL3mm0Vvat1FdgCVmy6sXITNqTk7hhS5zobJ8oEjzLtnyZKlWIlr6GQc9sX1OrfncCZxazTIiWVm2i3TZpdWfWLZzBsPFIPoPW/FYjM2vFKq0aDG9GUPHgO4OWLKCIZcO8g5Z9BVZx1cgN5oq+/cgmXSFatFKgpyOz77029Mp384sOILOWvzTWKoDbU1pt7BUxqQnRJfQOpNW0dzgZwftqcpm99i2ji0fMHqd17lQbr6+aKLYU5vbr5ZUCPa2ZjXStXvFdJDPogW9bgpPGZHtjrPRKSnwrUCwaWuCf07Q4xAio+ysFeuYzW9k3fzva14Iv/EBLUJCaMXch4Xzw5HFRWuRWvLOjun1bIqsiIYmWLmedeiLyVAtsMAyxTdsN6aVrMK3nduZoUbrd4EpLzO2mKWPGxqZUUdE5QOt730dLdxTQ4nHzHO4bgJ49T0sgtwQZs/eKmTaWkxZLrn45+7MytCrQEsmzdM0nszgdRWi9uNugZUtBQYkXB4fOJfGtvV2vOTMQyVRf/ipho0WaXwlNndeEwjU2xWJWbMYmT8t8lm6E5Zeq1rkRPIuBTFqMzPL5KZtI5Nmu1ekIv3Mb/byK5AgE0PhFKjQvaWSvjSZhX27CIzf/wpJKRbPOfEp4Hf5bMmNTRNRYowK0Wner0vJtTsDKOZ0WkjPWtfsDXf378IVSBePCuCFPE0yNEvl5HTPtxk+TWzNb9oyNi39uzNi0znejtWY5obUcH8jn9NN4hgGvZrAs68cTx7w9pk0vo/kl3INvw16eGyugxTMo+fr+7+7e/8br+O8HC/fPmzdv/w//x/6/2T/vjf3zwLcfZ2rc4bJm4Bwn55asl6Pa7UALPp208DuT98/7+ti8eW/gvx8s/AQ+eB2AYWzA6s2RWH7HZJFhc6JwccetoVVp69RJS1Ewrf1vmLR2zntj4Sc+uRc8894cAffm/v1FiqFrnSC7ABOlJ6Vv6J3LdUsWcu95Ra+8gmlh98a8N998c6RnZN+PWl5raoFj/fS8ee4ZJPDCDuinzLHf7fHWthKibrR4oLVzjT4oxO67hBauRi0jb5rY9Lo1r5AWk5gYGQFKYCKMTNj2QNyBtOCytudHdzf+6JzUZjwcAWhFGkdG9lvg6E1y3puPt4AzenkRKOGaBIwmEkaqdKnM7gRa8CmqAvr4UrptSWMcP2ai8cc/ligbK+K+Cf8Df7Vu3bpPgtMpJXCLs+6GLpnZHdLL41M71qDdi5CfRypHpqsstD7xiU8An30/WQSf3wRa4X3z5llSKTGVfEfWLZwZ9Ftf3Yf+8TmMjVgQBJHuABe+HBJ0+9Y9vPns2bs1gTffdWOoZtsM6dgbWcSf8+pK3Sa0xEQi0QK9z8jIvn0jP30dd0admJG9Jb5p9GBvvDFvX2rdgjgHA7L8FIXmm4HT5vJMMy/rjjyZZaSnpwcbURPQVydEkT3XTVpmYb/1puV4v795wboXOsiT9HXVOm6wObKUC7XxLprOFVrKYt1lJJf3VcsMiVKa1jxe8KuBs2fPcAKvjxPxW0Q8IU+RBXbW41DBEkavTmsGo2prAW643mJ6a2yYmlPZp05lsqczNNBizPcu8OSDV5yvZyjmOL+/7YV1C5rxi9QFAWh5grTPQ94BGCKvAsSvCCH+rVEPkPTik1XegBbH5yHQEzLoehs4qwbmkeEv/VF4kisUNI/5clLLf5AoyuKamkwN0FKNfguVMeHB5h6vlPtpaB6InVmwLtUhMCLQ8jbH4x5JSzVrmrdDC+IV+lq4Q6tq1iSPJ6VFvZIW8HrZcMobl1KBeHNYk/SXa81u3ZrejI3TQnSIwv+M0RLVadx9XVLfWN9YkBnFc/4O6PLP+Nug6khhxqNt1eK+QFyLx8PxaCAFkALSVskTkrbGU1ow6vUEo5JP21oVbtZSgNOgJRTM0Rb4P7J+S63RnTwNWlJjIy8VZsayFFSw5hfW4QX6WkBLMYGOeFxLaakgHe5oTsG5KimFPKFoAL8FEGogE9Z8UiAAyFLNtwWtvJuVVSMUtEg55fX4fKEgYPLEA6lQOFAVTqV8Pi8cBAMpvM3b50kFUx5PMABigSpfKhUM+3wVoDU9W770Qr+KrBphGQFaInmKQiDkTQXJsZc8NEB/sEKV+YSFKo++YzL31IWyaOE33vHOIFpWFf15xCzPU/kylFG3WKTfOqCZpGx/oWTl6xY5Sa6JPm8wFQ55fPh9f8GwF6qOx+CF989UecNBL8hUpbzesN2CKElLPfezc9mMQDEMbQ3K7DywU8ERk5//+evZTG5Zexm9PFP9MHHV1WPnk3QJ0crR8gSljlQ8Dn/RVNjjbUZbNS2UCgbD4SrcOuFUoIMPStBrQfcf1ULl0kofOPDS5d731PcuZwTaUADf8WSqew+kORYpGyYvXJm8Qp4LhZMx65ahJ3zi92MZSuMvmmod2/1W0963xlYs3ru7myFn7cO4ytOqqgrFU1Ho48ExeFt3qgOwSWHoz5sDzVEp6AmGpFRzKuAJx7WQVnbd+lnv+1Ppyz+dutR7ShEEJaNwPM2r8AW0smlFfX30SkPDlcMqL6cbZDnZpra1cXwy08DxFJfOJAW5rUFuAB8tpDNtApdsSzZkd9VcXNFUc3Hs7bffVpKKkswkwcBKQ2L217RVklaouXlraqsWCMd9WtDbHGADHXDtC8fBevDEfR1Bj0fz4T2T4Y6tWlXZtNif9fa+V1Pz/jsHei+9k7584PKB91X5ffh6CWid2HngnXdHR6/U1LyrVm84fPDwlw9OXpk8mL1wEGqb2nB4w8EN2X86OPmbycl35eSVg4cnL/wCC0wuVrJAS645v3v32+d3j51vGsvKb42dH/s+d6toeXwITCgpkJIIrXhK8kFFk8LRrXGpOR7ugFM8WBFaFdLiYSlebkuk0wd6e3sv1Ry/1Hsoexnq2au9p1/qvXwITvUeOPXqS+nswdHR0YM12cnRJw+OnroyemXD6F2jB+H49OHRQ78Y3QDh754ancy+O/ruk6OTF0Hg4GiNjGlx3MUVKy7W7N399lt7d53aO3bx0PdlihUZihIpsieDreA7hT3mm89hvIM3v8MXGePgoSF+eAB5igD583psg8WStJjq7PuXABfQOp090PuS8l7v5Vd738s+Vw1168CB42r18QuHAdeh0YPZ6gsNV0bfhYo2evDKhoNfnhy9AtXtIsDJTk4+uWH08JWDG6qxwGmV68a0+CzQqoaKVdO04n+u2Nu065DMqydOpI+fyB4/caL6RNb2DoC58G7OG9ESdpxW0qeh0QGtNKb1U0IrLWeA1qu9l9sOX1AaDo1O3jU6eVxNpwGGIr8+uuFENntqcvRQNnsim6P1bjZ7HAuossDrtDIGreqmFYv/1/kVe8cU/yOPfPDLD5784Jf/8shPHvlA1svOiwziiz1L96Zoba3QjI1w6UCNUtN7GXr596vf630PvqEl9h46vfNU74F/7u196fBkTVvN6GFoej8/cfg0psVBq7xQc+XCldENNRcOn4D2eRxoXRidPFVzuAYLCBR3sWnvIVmAvh5o7b74q/nnfzV28e2msSdPfPDI6Uc+OPUvQOwnT36g6laenH+W7nRpub79iNVSf3LzroN3qVus7uffee/SzkvvZeVzlw5cTr9/6Z1Lp1X1/UsHXq1559KlX79/6dJvfg7d+5WsWn148uCF04c3HP4Fx+Hjd5WGnx88eDj7Txs2XIH/v2m4sGFyQzUR4Nns+V27dv1W/tddu/4VWuH5sbeyv911/vyu6hOP1Hzwy5pHfvnkLx/B/6p1WpyQe5YudGilF5qUWqJiBjN8edv93PcACrxbPrqf52QlnVZlTlAVVYZjBQ45/KUqigr/FVXJNEA4l2wAMTiBw9WGNJwBmwJHwSI4bluDQnzQEDlsN8iQtJKsaRq7mEmC7aHgl3irsoITgYTxB6frgB+0o6+xmfFTf4zgou/KvsGrtMm2QLeH8xhaUVvjNDkAAAgOSURBVLwx4cQYb0rHb/wmX/Ch+0k4nBQMP4Nl9RimGPk2P3mGMoSxlXV+b9P5dC4l6zvZ8VvG8/qQt3vzXBmO7Di7M51aDU4tQ5Ax6hbSp2Ik486gRC+R4IwEXCV8LRD4iR//+MdiBE5K4ODiIKLIlkhknBGdz/BzmUxDxYNLe0vNBjpFrRkJBeNEp1a2GRse6oGQM+GtoqvWr9dPczznlwWJ0IrtieLJu7gGLgrHUU2T9uzRqHj8TDSmsYImCD2LOl+ciMTPSJ+NxePNKbT2dw/ya68/+Nhj4yxFWzZ70raNn6TRGofGkJ/OHevSVj9p4pbYFGNJ2JI0bclHj09Ec8HkrW2WbAq1YvJJ0frWYEOc1kVp8tipyKa6OvyCN4pN+qEbe0ojtDQppsU0LUZp+AtQxfCJGCIeDQEtvmf7oq9OAEvwR+A0Wis+OM6OPzg+Pu740Wd093XurA188MEH4fPeujp9YzjD8gItUua8vGjTDvDmFGYR7vwSnZ357eDO5lWpe9UsY8NV9mygQM907pSura1FFlqmK8veKpUZqhyttbW1DxZTquK07kM3S6scW9497z/SupW0rj766LirFhWjRcyC6dGaRieJKkrrUahexhtCcDbr6+rudVdptnr5xOrVwy60OLAgON2CKBzLMBHySEjTlTPyKSpq21AwnREWq9P6ZF3dQxESyrKYVuRGKoEFMZ2hmy2MXlVX90yEZoAWS0XuxRYEOc2rqmpYEAV1K7F+/ZZr19aW9dM4gp31mkW6leEe7NYK8i5HS3+QOjM+PpKrW86H5ln9YJ2WfpxQiboFtAZBEWfdEin8YHF3WgN1db+vrX0MYl179LFC1cpticL4+PDK4au1tYxrcKF3oG/Q6s3Teuwx6O6F2tr/DbSEiWh/Xf/GWGwPOPxJDuLwTcxDjtM6NLyBpkQ+N6AFmZTstwwerPE4nJV1dX+orV3T1bW9tvY6qBIFpbACBtNSv6sV+7XaWrCG/09tbV6hIrSgn3hU1043Cx20Xqyt/bdHH/2Q0IIUn9lUt8mhAtaBxqMyfB2V+Egkou86AoKSBENos8yQPGuhNf7gg+P2ipKnNTw85Ear/emn6423B23cQ751Wo+RGnY9h8PY9kR0MOWJi+m/KlYMnEHgodUrH629b1NdP9DSFWIjEVYi/SGR465eXUsOJF6SAMe9/fc+U1cHhJ9+5t56kvaHJq0fkoPrVlofrl07+MzgwOrVRmnMRkxoocTwkPHGCEnTiIbY7dkYu6+2dqMmYU0jET7CQpKGDpI0Af17JDIBtPoxrWuQlQuti4N1/b+7fn3tkbXtg4ND4+PQfiy0ll2/dt9VloWT4zCWBp3WDw2Jxru1UFf/pmc29Q9H8MwI5KctWUJ027gRMuqv2/RvJq1oT8+HP/pRW09P94cfHvnww2PJ1tbGxlYof6Om3ZNshQhACxAALSAMv+2W8fGuTZt+UEDr33O0SIT+fqiMa9euvXp1YmhIr2FAC7wQ5/fX7nts7VpcUUFJkIECdA0Owo8x/PTToOQIqERSPdJo6Ax94he12BNm3bq2qe5eV1r9/f+5bNm1hbU/nL/35wuXXV+48Mr8uj8sW75m/t7fL1v4jYW1Vz++bPnC5dfu3bu3fWAlaIt/EaLj74nyn4Sk4cz6oVXj41sGBoYHB7vqcEGAltES++rq/r22dnVd3f8lohD/0etX15LCg15XBwf79MKTunUffB6orf1DXZ2V1jVH3SIR6vqJKARAuY5cvf7Durr/gF9558f/Q/+5a2v/Uy88VClI4l5SdeFzYHAQPn9Hkv9/dXV9/f2Dg4PQWQ9ev/47EgGSv0+vWxZUfjJOHGnvPHrkHnAt7e0t99xzFP7a23tyn+QPu3biOtvbsfSRI0ePHBkBifZ2/1IciqWPHLlnOz4DMp3wH87qnyB3VP8k+eD0IL6ZA06YfBpxeuzSulbgukkEkOmB/0dItE4ielSPc+Tvf/vWW7/49a9f+ufFv3jrrV/Bwa+XQgSsJEnonlzyPWZMnPwiLNFJTo5AAfRQXR84kuXc/K5iWhC0/fXOSC7pFRyWsuVNDk5RzmEUcNPxsna/LWmHKIMLcNfiLxnr0hZ/iRzdpbhL21545AhzFiBfVoH08qKMBJnLzSwIggymq2z6RdnP83j9vOH3cxwrc3xO3I93ybKmxcvxfj53xZE5jsIbrg0/TlTMJ4T8TP4xEpAPxyHe4vdDTNlvFgu0oPOhIocsGoAsL2L97zp1GhDVHKpZfKimGv4WLya0ZIHj81pgNWhgYNhRUFZezNUVvygzAs2bufKcjFPO88S0FIpLK0rSpCWnKQH8xn5XXvZzSFHS5vZXtUNG/rSSNu0ZqJ+K0qaHyn4ZqUqbYgQlZfzo6rTp9eOfQVEhQi5mt5JRBZOHTBO/oZvsVyEfNS2btDT0lJI29tsmkQAq5QrxFGjY1qLd9fZTUy3fuXiqZnHNiUz18YxRt1T4HeSjiokamhTLJY+26YVNM1sUJYfDz6iIUxWzbIJf1cR0Mv8T4paItwkwualWlvgp8yGflICffMvmHn/LiwzFIj7/ijQGvzVCF6bBw/K5lQQCDaJizguBDI04y6IsnG5OU5qGlPJ+WmQYPLemZyQKPGUJpRmOZ/IJ8Ywg8Cx916lDh6ByHTp0+hC4xYeMuiXwUEF4cwsTqM5T+djkOFdL8XsP/Hk/XOppgSxyt9C6U9xdi51OmeUcqtHi6jvF3VXgamY5h8X/H3jMhOFRNIEcAAAAAElFTkSuQmCC'/>
                </div>
               

            </div>
            </div>
            {/* end::Text */}
          </div>
          {/* end::Item */}
          {/* begin::Item */}
          <div className='timeline-item'>
            {/* begin::Label */}
            <div className='timeline-label fw-bolder text-gray-800 fs-6'>10:00</div>
            {/* end::Label */}
            {/* begin::Badge */}
            <div className='timeline-badge'>
              <i className='fa fa-genderless text-success fs-1'></i>
            </div>
            {/* end::Badge */}
            {/* begin::Content */}
            <div className='timeline-content d-flex'>
              <span className='fw-bolder text-gray-800 ps-3'>AEOL meeting</span>
            </div>
            {/* end::Content */}
          </div>
          {/* end::Item */}
          {/* begin::Item */}
          <div className='timeline-item'>
            {/* begin::Label */}
            <div className='timeline-label fw-bolder text-gray-800 fs-6'>14:37</div>
            {/* end::Label */}
            {/* begin::Badge */}
            <div className='timeline-badge'>
              <i className='fa fa-genderless text-danger fs-1'></i>
            </div>
            {/* end::Badge */}
            {/* begin::Desc */}
            <div className='timeline-content fw-bolder text-gray-800 ps-3'>
              Make deposit
              <a href='#' className='text-primary'>
                USD 700
              </a>
              . to ESL
            </div>
            {/* end::Desc */}
          </div>
          {/* end::Item */}
          {/* begin::Item */}
          <div className='timeline-item'>
            {/* begin::Label */}
            <div className='timeline-label fw-bolder text-gray-800 fs-6'>16:50</div>
            {/* end::Label */}
            {/* begin::Badge */}
            <div className='timeline-badge'>
              <i className='fa fa-genderless text-primary fs-1'></i>
            </div>
            {/* end::Badge */}
            {/* begin::Text */}
            <div className='timeline-content fw-mormal text-muted ps-3'>
              Indulging in poorly driving and keep structure keep great
            </div>
            {/* end::Text */}
          </div>
          {/* end::Item */}
          {/* begin::Item */}
          <div className='timeline-item'>
            {/* begin::Label */}
            <div className='timeline-label fw-bolder text-gray-800 fs-6'>21:03</div>
            {/* end::Label */}
            {/* begin::Badge */}
            <div className='timeline-badge'>
              <i className='fa fa-genderless text-danger fs-1'></i>
            </div>
            {/* end::Badge */}
            {/* begin::Desc */}
            <div className='timeline-content fw-bold text-gray-800 ps-3'>
              New order placed
              <a href='#' className='text-primary'>
                #XF-2356
              </a>
              .
            </div>
            {/* end::Desc */}
          </div>
          {/* end::Item */}
          {/* begin::Item */}
          <div className='timeline-item'>
            {/* begin::Label */}
            <div className='timeline-label fw-bolder text-gray-800 fs-6'>16:50</div>
            {/* end::Label */}
            {/* begin::Badge */}
            <div className='timeline-badge'>
              <i className='fa fa-genderless text-primary fs-1'></i>
            </div>
            {/* end::Badge */}
            {/* begin::Text */}
            <div className='timeline-content fw-mormal text-muted ps-3'>
              Indulging in poorly driving and keep structure keep great
            </div>
            {/* end::Text */}
          </div>
          {/* end::Item */}
          {/* begin::Item */}
          <div className='timeline-item'>
            {/* begin::Label */}
            <div className='timeline-label fw-bolder text-gray-800 fs-6'>21:03</div>
            {/* end::Label */}
            {/* begin::Badge */}
            <div className='timeline-badge'>
              <i className='fa fa-genderless text-danger fs-1'></i>
            </div>
            {/* end::Badge */}
            {/* begin::Desc */}
            <div className='timeline-content fw-bold text-gray-800 ps-3'>
              New order placed
              <a href='#' className='text-primary'>
                #XF-2356
              </a>
              .
            </div>
            {/* end::Desc */}
          </div>
          {/* end::Item */}
          {/* begin::Item */}
          <div className='timeline-item'>
            {/* begin::Label */}
            <div className='timeline-label fw-bolder text-gray-800 fs-6'>10:30</div>
            {/* end::Label */}
            {/* begin::Badge */}
            <div className='timeline-badge'>
              <i className='fa fa-genderless text-success fs-1'></i>
            </div>
            {/* end::Badge */}
            {/* begin::Text */}
            <div className='timeline-content fw-mormal text-muted ps-3'>
              Finance KPI Mobile app launch preparion meeting
            </div>
            {/* end::Text */}
          </div>
          {/* end::Item */}
        </div>
        {/* end::Timeline */}
      </div>
      {/* end: Card Body */}
    </div>
  )
}

export default ListsWidget6
